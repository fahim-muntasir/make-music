import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as Tone from "tone";
import sounds from "../sounds.json";

const NOTE = "C2";

export default function SingleSong({
  id,
  name,
  date,
  recording_data,
  type,
  sharebutton,
  editbutton,
}) {
  const songDate = new Date(date).toLocaleDateString();
  const [isPlaying, setIsPlaying] = useState(false);
  const tracksRef = useRef([]);
  const stepsRef = useRef([]);
  const lampsRef = useRef([]);
  const seqRef = useRef(null);

  const samples = sounds[type];
  const numberOfSteps = 16;

  const stepIds = [...Array(numberOfSteps).keys()];

  const handleStartClick = async () => {
    if (!isPlaying) {
      await Tone.start();
      if (seqRef.current) {
        seqRef.current.dispose(); // Dispose the previous sequence
      }
      seqRef.current = createSequenceFromRecording(stepsRef.current);
      startPlayback();
    } else {
      stopPlayback();
    }
  };

  const startPlayback = () => {
    setIsPlaying(true);
    seqRef.current.start();
    Tone.Transport.start();
  };

  const stopPlayback = () => {
    setIsPlaying(false);
    seqRef.current.stop();
    Tone.Transport.stop();
  };

  const createSequenceFromRecording = (recordingData) => {
    return new Tone.Sequence(
      (time, step) => {
        recordingData?.forEach((trackState, trackIndex) => {
          const trackKey = String.fromCharCode(65 + trackIndex);
          if (trackState[trackKey][step]) {
            tracksRef.current[trackIndex].sampler.triggerAttack(NOTE, time);
          }
        });
        lampsRef.current[step].checked = true;
      },
      stepIds,
      "8n"
    );
  };

  useEffect(() => {
    console.log("pallal");
    const recordData = JSON.parse(recording_data);

    if (recordData && Array.isArray(recordData)) {
      stepsRef.current = recordData;
    }

    tracksRef.current = samples?.map((sample, i) => ({
      id: i,
      sampler: new Tone.Sampler({
        urls: {
          [NOTE]: sample.url,
        },
      }).toDestination(),
    }));

    lampsRef.current = stepIds?.map(() => ({
      checked: false,
    }));

    seqRef.current = createSequenceFromRecording(stepsRef.current);

    return () => {
      seqRef.current?.dispose();
      tracksRef.current?.forEach((trk) => {
        trk.sampler.dispose();
      });
    };
  }, [samples, recording_data]);

  return (
    <div className="mb-4 px-4 py-4 md:py-5 lg:py-5 md:flex lg:flex bg-[#8A97DA] items-center rounded-md justify-between">
      <div className="flex items-center mb-4 md:mb-0 lg:mb-0">
        <i className="fa-solid fa-music text-4xl md:text-5xl lg:text-5xl text-white"></i>
        <div className="ml-5">
          <h3 className="text-white text-3xl md:text-4xl lg:text-4xl font-bowlby">
            {name}
          </h3>
          <p className="text-white font-poppins text-sm">{songDate}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleStartClick}
          className="px-5 py-2 md:px-9 lg:px-9 md:py-2 lg:py-2 text-white font-poppins text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C] mx-3"
        >
          {isPlaying ? "Stop Preview" : "Preview"}
        </button>
        {editbutton && (
          <Link
            to={`/edit/${id}`}
            className="px-5 py-2 md:px-9 lg:px-9 md:py-2 lg:py-2 text-white font-poppins text-lg rounded border border-[#4BCE9C] bg-[#4BCE9C]"
          >
            Edit
          </Link>
        )}
      </div>
    </div>
  );
}
