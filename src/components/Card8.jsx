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
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADBklEQVR4nO2ZX2iNYRzHzy7IFnZhUfMnI6xkrnYj5UYMF4QLiuJGpPybls6NpRD5kz+NcktTLFkxxoVS/k9Ra5PlmGO4mDnGzOScj5566PXrOed99r7vcd70fi7P79v3+X3fP8/7PM+JxSIiIowAS4A3wCDwGWgHmoBtwKxY2AGeAU+BIczcAVYARbEwAlzHjrtApYXfMqAHSAL1QFm+A5zHnn7VoIufatzJV2AvUJKvANViwAxwFHiYJcRPYHkOPxXSRBKoyVeIF2Kwefr3OcBlQzPfVPAsXldz3MEM0BD43QDOiIHior7B8JJ3AKMMXmtw5xEwPsgAa8UAzQbNaiAtdPsMuhLgi0WIl8D0oALMFebtWXRHhC4FlBp0N4TuONBlCPEWmBxEgHHC+GMWnbq6H4S2zqCLC009MBpoMYRQ36FivwFGCtOhHNo9Qttm0CwUmpv69xHAJUOIBr8BlLGTHzm05YZ3oUJoKkW9w1ErBp4YZqdqPwFKheEnF32b0G8U9TGi3i/qMw2zWqufABXCrMtFf1roj4n6WFEfNHicMtyFGV4DLBBmt130m4T+lqjPFvWEwWOS4VGMew2wWxgdctHXCH2nqK8T9StZfO4LXYvXANeE0VJRLwImAvOB9Xo54OSd0F8U9c3iyi8CduplvJPXXpovAwaE0X7grJr+9DrpO7kZcPhN0JsjJ83APf3hs/IZToCt+OfPrAWc9OGT9BJAPc/vfQyqZo8dDj+bdZCJHvno2gbo1mt8N3qBx/pLehjYovfT5Qa/XKT0y3sO2KXfB+/rIX0HEnoj8lw/ryfUVVUbF6BKzevD9HulAwfXaERExN/oGUQegYSBBLA45kZIm/9Nt02AbOc3YaDPJkAn4eWBTYBWwstBmwC1hJOM1c4MmKrFYaPRtXlHiEbCRUouDt0CTDFsZgpFWh1fWjfvcuZZCOqG3bwjxPYChkj7at4RYmUBPm59wCrfzYsTg6Z/MDulgQvqACCw5kWQKv2nh9qnBkWv3qEdAKblpfGIiP+YX9ewPVVInYuYAAAAAElFTkSuQmCC"></img>
          </div>
          <p className="font-medium text-lg text-center mt-10 mr-1 ml-1">
            Battleship is an engaging project crafted during my journey with
            TheOdinProject Course. It leverages HTML, CSS, Tailwind CSS, and
            JavaScript to offer an immersive gaming experience.
          </p>
        </div>
        <div className="back">
          <div className="flex flex-col justify-between items-center">
            <p className="text-center font-medium text-lg mt-2 ml-1 mr-1">
              Grid Interface: Visualize the battlefield with an intuitive grid
              interface, where each cell represents a potential target. Hit or
              Miss: Take aim, fire, and witness the outcome as hits and misses
              are displayed dynamically on the grid.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
