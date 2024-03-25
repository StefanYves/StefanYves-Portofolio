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
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABGElEQVR4nO2ZMW7CMBSG35AhAwegKd1Qu3E4hqY3QByFRojDtMcoFcnG9FWVPHQwJAH72aneJ3mx9Gx//p+XRMQwjF6ABdAAHfHpgAPwIgEPf0Sfb+AphMDvzafiPYSARttcog0hkBQxgX7OwCtQuVG7OS9jkxaFBGpPTT0lgQdPzXxKApWn5nHqLfRGIERB4Ox6ftAjzlEgKmIC1/kA1sAKmLmxcnOfvoKxSUvEBDZAcaWuALY5C5QDastsBeTG+mwEtBATSIxYArFuZuBbk2wX1toHE8g0AS3EBBIjlkCsmxn41iTbhbX2wQQyTUALMQFoSccpRAL7hAJNCIFn4CvB4Y/A8m6BP1+bd0rt1Lofi2EObxj/nB88cOE/6heA2wAAAABJRU5ErkJggg=="></img>
          </div>
          <p className="font-medium text-lg text-center mt-10 mr-1 ml-1">
            A dynamic CV application built using React, Vite, and Tailwind CSS
            to streamline the process of creating professional resumes.
          </p>
        </div>
        <div className="back">
          <div className="flex flex-col justify-between items-center">
            <p className="text-center font-medium text-lg mt-2 ml-1 mr-1">
              This CV application is designed to simplify the creation of
              resumes by providing an intuitive interface for entering general
              information, education, and work experience. Leveraging React,
              Vite, and Tailwind CSS, it offers real-time updates, allowing
              users to visualize their CV as they input their details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
