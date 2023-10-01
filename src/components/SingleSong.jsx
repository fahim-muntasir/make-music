import React from "react";
import { PiMusicNoteDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function SingleSong({ id, name, date }) {
  const songDate = new Date(date).toLocaleDateString();
  return (
    <div className="flex bg-[#8A97DA] h-24 items-center rounded-md justify-between">
      <div className="flex items-center">
        <div className="border-[5px] ml-8 h-20 border-white flex items-center p-3 rounded-3xl">
          <PiMusicNoteDuotone size={50} className="text-[#d4d0d0]" />
        </div>
        <div className="ml-4">
          <h3 className="text-white text-4xl font-bowlby">{name}</h3>
          <p className="text-white font-poppins text-sm">{songDate}</p>
        </div>
      </div>
      <div className="mr-8">
        <Link
          to={`/share/${id}`}
          className="px-9 py-2 text-white font-poppins text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C]"
        >
          Share
        </Link>
        <button className="px-9 py-2 text-white font-poppins text-lg hover:bg-[#4BCE9C] rounded border border-[#4BCE9C] mx-3">
          Preview
        </button>
        <Link
          to="/edit"
          className="px-9 py-2 text-white font-poppins text-lg rounded border border-[#4BCE9C] bg-[#4BCE9C]"
        >
          Edit
        </Link>
      </div>
    </div>
  );
}
