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
            Experience the future of portfolio websites with 6maex's captivating
            landing page. Combining React, Tailwind CSS, and Three.js, this
            cutting-edge platform showcases stunning visuals and interactive
            designs. <span className="bold"> ( WORK IN PROGRESS )</span>
          </p>
        </div>
        <div className="back">
          <div className="flex flex-col justify-between items-center">
            <p className="text-center font-medium text-lg mt-2">
              Prepare to be mesmerized by the seamless navigation and dynamic
              elements that bring 6maex's graphic design portfolio to life.
              Discover a new dimension of creativity with 6maex's revolutionary
              landing page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
