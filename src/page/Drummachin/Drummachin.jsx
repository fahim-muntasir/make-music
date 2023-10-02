import React, { useState, useEffect, useRef } from "react";
import * as Tone from "tone";
import styles from "./drum.module.css";

const NOTE = "C2";

export default function DrumMachine({ samples, numOfSteps = 16 }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const tracksRef = useRef([]);
  const stepsRef = useRef([[]]);
  const lampsRef = useRef([]);
  const seqRef = useRef(null);

  const trackIds = [...Array(samples.length).keys()];
  const stepIds = [...Array(numOfSteps).keys()];

  const handleStartClick = async () => {
    if (Tone.Transport.state === "started") {
      // Tone.Transport.pause();
      Tone.Transport.stop();
      setIsPlaying(false);
    } else {
      await Tone.start();
      Tone.Transport.start();
      setIsPlaying(true);
    }
  };

  const handleBpmChange = (e) => {
    Tone.Transport.bpm.value = Number(e.target.value);
  };

  const handleVolumeChange = (e) => {
    Tone.Destination.volume.value = Tone.gainToDb(Number(e.target.value));
  };

  const saveStateToLocalStorage = () => {
    const stateToSave = {
      steps: stepsRef.current.map((trackSteps) =>
        trackSteps.map((step) => step.checked)
      ),
    };
    console.log(stateToSave);
    localStorage.setItem("drumMachineState", JSON.stringify(stateToSave));
  };

  const loadStateFromLocalStorage = () => {
    const savedState = JSON.parse(localStorage.getItem("drumMachineState"));
    if (savedState && savedState.steps && Array.isArray(savedState.steps)) {
      savedState.steps.forEach((trackSteps, trackId) => {
        trackSteps.forEach((isChecked, stepId) => {
          if (stepsRef.current[trackId]?.[stepId]) {
            stepsRef.current[trackId][stepId].checked = isChecked;
          }
        });
      });
    }
  };

  useEffect(() => {
    loadStateFromLocalStorage();

    tracksRef.current = samples.map((sample, i) => ({
      id: i,
      sampler: new Tone.Sampler({
        urls: {
          [NOTE]: sample.url,
        },
      }).toDestination(),
    }));
    seqRef.current = new Tone.Sequence(
      (time, step) => {
        tracksRef.current.map((trk) => {
          if (stepsRef.current[trk.id]?.[step]?.checked) {
            trk.sampler.triggerAttack(NOTE, time);
          }
          lampsRef.current[step].checked = true;
        });
      },
      [...stepIds],
      "8n"
    );
    seqRef.current.start(0);

    return () => {
      seqRef.current?.dispose();
      tracksRef.current.map((trk) => void trk.sampler.dispose());
    };
  }, [samples, numOfSteps]);

  const handleCellContentClick = (trackId, stepId) => {
    if (stepsRef.current[trackId]?.[stepId]) {
      tracksRef.current[trackId].sampler.triggerAttackRelease(NOTE, "16n");
    }
  };

  return (
    <div className={styles.machine}>
      <div className={styles.labelList}>
        {samples.map((sample) => (
          <div key={sample.name}>{sample.name}</div>
        ))}
      </div>
      <div className={styles.grid}>
        <div className={styles.row}>
          {stepIds.map((stepId) => (
            <label className={styles.lamp} key={stepId}>
              <input
                type="radio"
                name="lamp"
                id={"lamp" + "-" + stepId}
                disabled
                ref={(elm) => {
                  if (!elm) return;
                  lampsRef.current[stepId] = elm;
                }}
                className={styles.lamp__input}
              />
              <div className={styles.lamp__content} />
            </label>
          ))}
        </div>
        <div className={styles.cellList}>
          {trackIds.map((trackId) => (
            <div key={trackId} className={styles.row}>
              {stepIds.map((stepId) => {
                const id = trackId + "-" + stepId;
                return (
                  <label className={styles.cell} key={id}>
                    <input
                      id={id}
                      type="checkbox"
                      ref={(elm) => {
                        if (!elm) return;
                        if (!stepsRef.current[trackId]) {
                          stepsRef.current[trackId] = [];
                        }
                        stepsRef.current[trackId][stepId] = elm;
                      }}
                      className={styles.cell__input}
                    />
                    <div
                      className={styles.cell__content}
                      onClick={() => handleCellContentClick(trackId, stepId)}
                    />
                  </label>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.controls}>
        <button onClick={handleStartClick} className={styles.button}>
          {isPlaying ? "Pause" : "Start"}
        </button>
        <label className={styles.fader}>
          <span>BPM</span>
          <input
            type="range"
            min={30}
            max={300}
            step={1}
            onChange={handleBpmChange}
            defaultValue={120}
          />
        </label>
        <label className={styles.fader}>
          <span>Volume</span>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            onChange={handleVolumeChange}
            defaultValue={1}
          />
        </label>
        <button onClick={saveStateToLocalStorage}>Save data</button>
      </div>
    </div>
  );
}
