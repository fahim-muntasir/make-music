import React from "react";
import bg from "../../assets/bg.jpg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-no-repeat w-full h-20 flex items-center px-5"
    >
      {location.pathname !== "/" && (
        <Link to="/" className="text-xl mr-5 text-[#8A97DA]">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
      )}
      <Link
        to="/"
        className="text-4xl md:text-5xl lg:text-5xl text-white font-bowlby"
      >
        SongTrax
      </Link>
    </div>
  );
};

export default Header;
