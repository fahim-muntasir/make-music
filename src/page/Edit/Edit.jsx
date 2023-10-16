import sounds from "../../sounds.json";
import React, { useState, useEffect, useRef } from "react";
import * as Tone from "tone";
import styles from "./style.module.css";
import SongType from "../../components/SongType";
import { baseURL } from "../../config/config.json";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import bg from "../../assets/bg1.jpg";

const NOTES = [
  "C2",
  "D2",
  "E2",
  "F2",
  "G2",
  "A2",
  "B2",
  "C3",
  "D3",
  "E3",
  "F3",
  "G3",
  "A3",
  "B3",
  "C4",
  "D4",
];

const Edit = () => {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState("piano");
  const [isPlaying, setIsPlaying] = useState(false);
  const [songName, setSongName] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const tracksRef = useRef([]);
  const stepsRef = useRef([[]]);
  const lampsRef = useRef([]);
  const seqRef = useRef(null);

  const { id: songId } = useParams();
  const navigate = useNavigate();

  const samples = sounds[activeButton];
  const numberOfSteps = 16;

  const trackIds = [...Array(samples.length).keys()];
  const stepIds = [...Array(numberOfSteps).keys()];

  const handleStartClick = async () => {
    if (Tone.Transport.state === "started") {
      Tone.Transport.stop();
      setIsPlaying(false);
    } else {
      try {
        await Tone.start();

        // You should start the Tone.Transport and Sequence here.
        seqRef.current.start(0);
        Tone.Transport.start();

        setIsPlaying(true);
      } catch (error) {
        console.error("Audio start error:", error);
      }
    }
  };

  const submitHandler = async () => {
    setIsLoading(true);

    const recording_data = stepsRef.current.map((trackSteps, trackId) => {
      const trackObject = {};
      const trackKey = String.fromCharCode(65 + trackId); // Convert 0 to "A", 1 to "B", etc.
      trackObject[trackKey] = trackSteps.map((step) => step.checked);
      return trackObject;
    });

    try {
      const data = {
        type: activeButton,
        name: songName,
        recording_data: JSON.stringify(recording_data),
        datetime: Date.now(),
      };

      if (songId === "new") {
        const url = `${baseURL}/sample`;
        const response = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        await response.json();
      } else {
        const url = `${baseURL}/sample/${songId}`;
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        await response.json();
      }

      setIsLoading(false);
      navigate("/");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  async function getSong(id) {
    const url = `${baseURL}/sample/${id}`;
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }

  const populateRecordingData = async () => {
    if (songId === "new") return;

    const { recording_data, type, name } = await getSong(songId);

    const recordData = JSON.parse(recording_data);
    setSongName(name);
    setActiveButton(type);

    if (recordData && Array.isArray(recordData)) {
      recordData.forEach((trackState, trackId) => {
        const trackKey = String.fromCharCode(65 + trackId);
        const trackSteps = trackState[trackKey] || [];
        trackSteps.forEach((isChecked, stepId) => {
          if (stepsRef.current[trackId]?.[stepId]) {
            stepsRef.current[trackId][stepId].checked = isChecked;
          }
        });
      });
    }
  };

  useEffect(() => {
    tracksRef.current = samples.map((sample, i) => ({
      id: i,
      sampler: new Tone.Sampler({
        urls: {
          [NOTES[i % NOTES.length]]: sample.url,
        },
        release: 1,
      }).toDestination(),
    }));
    seqRef.current = new Tone.Sequence(
      (time, step) => {
        tracksRef.current.map((trk) => {
          if (stepsRef.current[trk.id]?.[step]?.checked) {
            trk.sampler.triggerAttack(NOTES[trk.id % NOTES.length], time);
          }
          lampsRef.current[step].checked = true;
        });
      },
      [...stepIds],
      "16n"
    );
    seqRef.current.start(0);

    return () => {
      seqRef.current?.dispose();
      tracksRef.current.map((trk) => void trk.sampler.dispose());
    };
  }, [samples, numberOfSteps]);

  useEffect(() => {
    populateRecordingData();
  }, []);

  const handleCellContentClick = (trackId, stepId) => {
    if (stepsRef.current[trackId]?.[stepId]) {
      const noteIndex = (trackId * numberOfSteps + stepId) % NOTES.length;
      const note = NOTES[noteIndex];
      tracksRef.current[trackId].sampler.triggerAttackRelease(note, "16n");
    }
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      className="bg-no-repeat pb-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="px-5">
          {location.pathname === "/edit/new" ? (
            <h1 className="text-2xl font-semibold mt-5 font-poppins ml-2 md:ml-0">
              Create music
            </h1>
          ) : (
            <h1 className="text-2xl font-semibold mt-5 font-poppins ml-2 md:ml-0">
              Edit music
            </h1>
          )}
          <div className=" py-4 mt-4 md:flex lg:flex px-5 bg-[#8A97DA] items-center rounded-md md:gap-2 lg:gap-2 md:justify-between lg:justify-between">
            <input
              onChange={(e) => setSongName(e.target.value)}
              value={songName}
              type="text"
              className=" mb-4 md:mb-0 lg:mb-0 py-2 rounded-md outline-none px-5 w-full md:w-96 lg:w-96"
              placeholder="Type your song name"
            />
            <div className="flex justify-end md:block lg:block">
              <button
                onClick={handleStartClick}
                className="px-3 py-2 text-white font-poppins hover:bg-[#4BCE9C] rounded border border-[#4BCE9C]"
              >
                {isPlaying ? "Stop Preview" : "Preview"}
              </button>
              <button
                onClick={submitHandler}
                className="px-3 py-2 text-white font-poppins bg-[#4BCE9C] rounded border border-[#4BCE9C] mx-2"
                disabled={isloading}
              >
                Save
              </button>
              {isloading && (
                <i className="fa-solid fa-spinner text-lg animate-spin mr-1 text-white"></i>
              )}
            </div>
          </div>
        </div>
        <SongType
          activeButton={activeButton}
          handleButtonClick={handleButtonClick}
        />
        <div>
          <div className="flex justify-between">
            <div className={`${styles.labelList} w-14`}>
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
                            onClick={() =>
                              handleCellContentClick(trackId, stepId)
                            }
                          />
                        </label>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
