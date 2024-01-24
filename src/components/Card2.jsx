import React from "react";
import { useState } from "react";
import "../Flipcard.css";
import chat from "../assets/chat.png";

const Card2 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div onMouseEnter={handleCardHover} onMouseLeave={handleCardHover}>
      <div className={`card ${isHovered ? "flipped" : ""}`}>
        <div className="front flex flex-col">
          <div className="flex items-center justify-center mt-20">
            <img src={chat} alt="" className="rounded-lg" />
          </div>
          <p className="font-medium text-lg text-center mt-10 mr-1 ml-1">
            Elevate your communication with my cutting-edge, professional chat
            application. Meticulously developed with React, Tailwind CSS, and
            Firebase, it offers flawless real-time interactions and an exquisite
            design.
          </p>
        </div>
        <div className="back">
          <div className="flex flex-col justify-between items-center">
            <p className="text-center font-medium text-lg mt-2">
              To initiate conversations with your friends, simply utilize the
              search bar to locate and add them as contacts by clicking on their
              respective icons. Once added, you can seamlessly engage in
              conversations, akin to the convenience offered by WhatsApp. Stay
              connected and enjoy uninterrupted communication with your friends
              within a streamlined and user-friendly interface.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
