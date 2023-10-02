import React from "react";

export default function SongType({ activeButton, handleButtonClick }) {
  return (
    <div className="my-8 flex items-center px-5">
      <div className="w-14">
        <h1 className="text-lg md:text-xl font-semibold font-poppins">Type</h1>
      </div>
      <div className="grid grid-cols-4 w-full">
        <div
          className={`md:px-9 py-2 text-lg font-poppins text-center cursor-pointer  border border-[#8A97DA] ${
            activeButton === "guitar" ? "bg-[#8A97DA] text-white" : ""
          }`}
          onClick={() => handleButtonClick("guitar")}
        >
          {" "}
          Guitar{" "}
        </div>
        <div
          className={`md:px-9 py-2 text-center cursor-pointer text-lg font-poppins border-l-0  border border-[#8A97DA] ${
            activeButton === "piano" ? "bg-[#8A97DA] text-white" : ""
          }`}
          onClick={() => handleButtonClick("piano")}
        >
          {" "}
          Piano
        </div>
        <div
          className={`md:px-9 py-2 text-center cursor-pointer border-l-0 text-lg font-poppins  border border-[#8A97DA] ${
            activeButton === "french horn" ? "bg-[#8A97DA] text-white" : ""
          }`}
          onClick={() => handleButtonClick("french horn")}
        >
          French horn
        </div>
        <div
          className={`md:px-9 py-2 text-center cursor-pointer text-lg font-poppins border-l-0  border border-[#8A97DA] ${
            activeButton === "drums" ? "bg-[#8A97DA] text-white" : ""
          }`}
          onClick={() => handleButtonClick("drums")}
        >
          Drums
        </div>
      </div>
    </div>
  );
}
