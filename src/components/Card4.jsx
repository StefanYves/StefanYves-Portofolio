import React from "react";
import { useState } from "react";
import "../Flipcard.css";
import gd from "../assets/gd.png";

const Card3 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div onMouseEnter={handleCardHover} onMouseLeave={handleCardHover}>
      <div className={`card ${isHovered ? "flipped" : ""}`}>
        <div className="front flex flex-col">
          <div className="flex items-center justify-center mt-20">
            <img src={gd} alt="" className="rounded-lg" />
          </div>
          <p className="font-medium text-lg text-center mt-10 mr-1 ml-1">
            Introducing a dynamic Todo List powered by JavaScript, Webpack and
            styled with the sleek Tailwind CSS framework, and bundled using
            Webpack. This application ensures seamless task management on
            various devices.
          </p>
        </div>
        <div className="back">
          <div className="flex flex-col justify-between items-center">
            <p className="text-center font-medium text-lg mt-2 ml-1 mr-1">
              Thanks to Webpack, the application is optimized for performance,
              ensuring a fast and reliable user experience. Stay organized and
              productive with this minimalist yet powerful Todo List, where
              Tailwind CSS and Webpack combine to create an efficiently bundled
              solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
