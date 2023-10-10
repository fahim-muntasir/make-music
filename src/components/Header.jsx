import React from "react";
import bg from "../assets/bg.jpg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-no-repeat w-full h-20 flex items-center justify-between px-11"
    >
      <div className="flex items-center">
        {location.pathname !== "/" && (
          <Link to="/" className="text-xl mr-5 text-[#8A97DA]">
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
        )}
        <Link
          to="/"
          className="text-4xl md:text-5xl lg:text-5xl text-white font-bowlby"
        >
          MusicFun
        </Link>
      </div>

      <Link
        to="/edit/new"
        className="bg-[#8A97DA] text-gray-50 px-8 flex justify-center items-center py-1 text-lg font-poppins rounded-md"
      >
        Create +
      </Link>
    </div>
  );
};

export default Header;
