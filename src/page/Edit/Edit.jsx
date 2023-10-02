import React, { useState } from "react";
import bg from "../../assets/bg1.jpg";
import DrumMachine from "../Drummachin/Drummachin";

const Edit = () => {
  const [activeButton, setActiveButton] = useState("Guitar");
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
          <h1 className="text-2xl font-semibold mt-5 font-poppins ml-2 md:ml-0">
            Edit song
          </h1>
          <div className=" py-4 mt-4 md:flex lg:flex px-5 bg-[#8A97DA] items-center rounded-md md:gap-2 lg:gap-2 md:justify-between lg:justify-between">
            <input
              type="text"
              className=" mb-4 md:mb-0 lg:mb-0 py-2 rounded-md outline-none px-5 w-full md:w-96 lg:w-96"
            />
            <div className="flex justify-end md:block lg:block">
              <button className="px-3 py-2 text-white font-poppins hover:bg-[#4BCE9C] rounded border border-[#4BCE9C]">
                Preview
              </button>
              <button className="px-3 py-2 text-white font-poppins hover:bg-[#4BCE9C] rounded border border-[#4BCE9C] mx-2">
                Save
              </button>
            </div>
          </div>
        </div>

        <div className="my-8 flex items-center px-5">
          <div className="w-14">
            <h1 className="text-lg md:text-xl font-semibold font-poppins">
              Type
            </h1>
          </div>
          <div className="grid grid-cols-4 w-full">
            <div
              className={`md:px-9 py-2 text-lg font-poppins text-center cursor-pointer  border border-[#8A97DA] ${
                activeButton === "Guitar" ? "bg-[#8A97DA] text-white" : ""
              }`}
              onClick={() => handleButtonClick("Guitar")}
            >
              {" "}
              Guitar{" "}
            </div>
            <div
              className={`md:px-9 py-2 text-center cursor-pointer text-lg font-poppins border-l-0  border border-[#8A97DA] ${
                activeButton === "Piano" ? "bg-[#8A97DA] text-white" : ""
              }`}
              onClick={() => handleButtonClick("Piano")}
            >
              {" "}
              Piano
            </div>
            <div
              className={`md:px-9 py-2 text-center cursor-pointer border-l-0 text-lg font-poppins  border border-[#8A97DA] ${
                activeButton === "Violin" ? "bg-[#8A97DA] text-white" : ""
              }`}
              onClick={() => handleButtonClick("Violin")}
            >
              Violin
            </div>
            <div
              className={`md:px-9 py-2 text-center cursor-pointer text-lg font-poppins border-l-0  border border-[#8A97DA] ${
                activeButton === "Drums" ? "bg-[#8A97DA] text-white" : ""
              }`}
              onClick={() => handleButtonClick("Drums")}
            >
              Drums
            </div>
          </div>
        </div>

        <div>
          <DrumMachine
            samples={[
              { url: "/drums1.mp3", name: "A" },
              { url: "/drums2.mp3", name: "B" },
              { url: "/drums3.mp3", name: "C" },
              { url: "/drums4.mp3", name: "D" },
              { url: "/drums5.mp3", name: "E" },
              { url: "/drums6.mp3", name: "F" },
              { url: "/drums7.mp3", name: "G" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Edit;
