import React from "react";
import { useState } from "react";
import "../Flipcard.css";
import lp from "../assets/lp.png";

const Card4 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div onMouseEnter={handleCardHover} onMouseLeave={handleCardHover}>
      <div className={`card ${isHovered ? "flipped" : ""}`}>
        <div className="front flex flex-col">
          <div className="flex items-center justify-center mt-20">
            <img src={lp} alt="" className="rounded-lg" />
          </div>
          <p className="font-medium text-lg text-center mt-10 mr-1 ml-1">
            Revolutionize your furniture shopping with my captivating landing
            page for a Romanian furniture ordering company. Using React and
            Tailwind CSS, this cutting-edge platform delivers seamless
            navigation, stunning visuals.
          </p>
        </div>
        <div className="back">
          <div className="flex flex-col justify-between items-center">
            <p className="text-center font-medium text-lg mt-2">
              Discover a transformative furniture shopping experience. Customize
              and tailor our exquisite furniture pieces to your preferences.
              Seamlessly navigate through elegant dining sets, and stylish
              bedroom furniture. With React's advanced technology, dynamic
              elements enhance your browsing experience. My visually captivating
              design, crafted with Tailwind CSS, reflects contemporary
              aesthetics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card4;
