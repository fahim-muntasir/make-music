import React from "react";
import bg from "../assets/bg.jpg";
const Footer = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-no-repeat w-full h-5 flex items-center px-5 "
    ></div>
  );
};

export default Footer;
