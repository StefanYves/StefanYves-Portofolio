import React from "react";
import { useState } from "react";
import "../Flipcard.css";
import rps from "../assets/rock.png";

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div onMouseEnter={handleCardHover} onMouseLeave={handleCardHover}>
      <div className={`card ${isHovered ? "flipped" : ""}`}>
        <div className="front flex flex-col">
          <div className="flex items-center justify-center mt-20">
            <img src={rps} alt="" className="rounded-lg" />
          </div>
          <p className="font-medium text-lg text-center mt-10">
            Immerse yourself in my impressive rock-paper-scissors game built
            with React, Tailwind CSS, and Socket.IO. Engage in real-time
            battles, showcasing sleek design and seamless gameplay.
          </p>
        </div>
        <div className="back">
          <div className="flex flex-col justify-between items-center">
            <p className="text-center font-medium text-lg mt-2">
              To engage in gameplay, both you and your friend are required to
              join the same room. After completing your initial game, simply
              reset the game, proceed to join the room again, and continue
              playing. This process ensures a smooth and uninterrupted gaming
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
