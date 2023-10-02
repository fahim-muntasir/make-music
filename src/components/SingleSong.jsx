import React from "react";
import { PiMusicNoteDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function SingleSong({ id, name, date }) {
  const songDate = new Date(date).toLocaleDateString();
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
        <Link
          to={`/share/${id}`}
          className=" px-5 py-2 md:px-9 lg:px-9 md:py-2 lg:py-2 text-white font-poppins text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C]"
        >
          Share
        </Link>
        <button className="px-5 py-2 md:px-9 lg:px-9 md:py-2 lg:py-2 text-white font-poppins text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C] mx-3">
          Preview
        </button>
        <Link
          to={`/edit/${id}`}
          className="px-5 py-2 md:px-9 lg:px-9 md:py-2 lg:py-2 text-white font-poppins text-lg rounded border border-[#4BCE9C] bg-[#4BCE9C]"
        >
          Edit
        </Link>
      </div>
    </div>
  );
}
