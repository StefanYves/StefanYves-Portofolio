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
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABT0lEQVR4nO2ZTU7EMAxGs5oVNwAE12A4X/k5wZwALgBrFu1FkGhZcIk3CjIsoGoTJ5O0qp/URas09hdH/hZ27kQA18Az8CXPE3Dl1gRwAfT85wM4d2sBOEjiLz5xeV7l26FGQjvgEfhEx+/pA5fKPQbg3ueSIuQBPe3Ifl3CfncpQvxpeG4m1nyTEGPyf2AvSwZtjKAkTy0kR4zNCRlk2V6x/63826fmkUOI7yipNEsQshMxP5WJwZtmM9daKSGkBJgQwSqSGexqbelqAW8j7bRLSbiWkFHUwZR5ZBMy8X4GvM974nxVWamQtoqQv6iDKfPIIaQLOc3FCykJJiTsapmPxEKJrjXxbj7ialTEfCQCrP1uyRAxH4kH85G6htjOxYrGfCQzmI9syUdKggkRrCILvFqDdtCZCwIHpq7AoDMXTYqQlEFnLvqQganhFsYRKNaxhEuX8icAAAAASUVORK5CYII="></img>
          </div>
          <p className="font-medium text-lg text-center mt-10 mr-1 ml-1">
            Introducing a user-friendly Book Library built with Tailwind, and
            JavaScript. This minimalistic web application allows you to
            effortlessly track your reading journey. Add and manage books,
            including details like the author's name and the number of pages.
          </p>
        </div>
        <div className="back">
          <div className="flex flex-col justify-between items-center">
            <p className="text-center font-medium text-lg mt-2 ml-1 mr-1">
              Stay organized with this intuitive Book Library, where the
              simplicity of HTML, the styling power of CSS and Tailwind, and the
              functionality of JavaScript combine for a delightful and efficient
              reading tracking solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
