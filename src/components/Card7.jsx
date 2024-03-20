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
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADF0lEQVR4nO2YS0gWURTHp4dgEBUE9kKM2hUYBD1Agja1ahG26GFZgZZafEVZQa0FNxGEBBVltJEWUdDGpEWmQkhuImplEAVBQkVZi1B/cfFMHMY7OqP3jh85fxjwO+fMPfObc+7DCYJcubIRRaIgBxE5eyPTFK4r4uSpZjM/OYgbkVdkLrcWMA84CvQBw3L1ArXG5zu/S5D2Sfayu77zOxkIOCwhP4E6YAWwEqgXm1GNr/wuQUw7GTVafI3i6/WV3yXILwkps/jKxDfsK39izSWQvklaq0l8Pb7yuwSpUZP9JLAKWA00qMl+SMU/AwaAa8BeYHlRgBgBbcSrLVACPkT8o8Br4DpQpWMzB5G43cAj9YCPgV2WuNvi7wYeAl/VPSO6erMFshB4qh6qCyixxO0T/3P5vRb4EoH5t+8wfkLIFOSmpa1uWeKWAn/kqgTeS+wroEXBHJH4xcCLTECACxIWLsX674uW+O5IzEtgmfguK5jaEMY7CLBHko4BBxRItUxkYz8YuSd8WKR1lkT8zeIbBY7NGGIqEGBL9M3reFWp38BWdd86tTTfB+Zbxr6kYI57AwHWAJ/EfScuHrghpiFgvbJXAT/E1wEssOQ4L/4x24brCsRsahNWJwtIicQYDUTG2KEqcy+mMs2qMnU+QHqAfrMK2eKB0shK1W87qiSEOadg6p2CxMRWKJDWFDmStNlZaTFznfINYlYq1NubcOSYIUyDgjntEyTc0MKd+q1usQT3J2mzgoJp8gUSHlH2A2/StliKypxQMAUfIGElyoHNcgxJ1WIpYOrVhltwBqIm+pCytYrtHbDIM8wZVyDhRO9UtlKZJ6lbzDJn2mPmTLIFIAVIONFbIvZtchYbkY94V4FBc3B0CHNF/CZH5UxBOiW02uILW0wrEchUMNLS4b8CRg+CaezsNlVYYkvl6D4oFdme9FMqUB4HY4Ew+ugCpCtwLMbhbTAdFgijz6lAshLjGlS/NYxNT4oZhIhtZwyMsW1KPFCWIr61N8qXmu/AN/kisyH1QFkJV/n/O5DZVpCD5MoVuNRfHBmIn7kykSgAAAAASUVORK5CYII="></img>
          </div>
          <p className="font-medium text-lg text-center mt-10 mr-1 ml-1">
            Introducing an interactive Etch-a-Sketch web application created
            with JavaScript, offering a playful drawing experience. Utilizing
            HTML and CSS for a user-friendly interface, this digital
            Etch-a-Sketch allows you to sketch freely with the mouse.
          </p>
        </div>
        <div className="back">
          <div className="flex flex-col justify-between items-center">
            <p className="text-center font-medium text-lg mt-2 ml-1 mr-1">
              JavaScript powers the drawing functionalities, enabling you to
              create intricate designs or doodles. Immerse yourself in the
              nostalgic joy of Etch-a-Sketch, reimagined digitally with the
              dynamic capabilities of JavaScript. Let your creativity flow as
              you draw, erase, and enjoy the whimsical charm of this modern
              twist on a classic childhood favorite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
