import React from "react";
import { useState } from "react";
import "../Flipcard.css";


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
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABg0lEQVR4nO3YTUtUURwH4MnShZTbJE0/iNs2CamR9hkEQ2zhsm0oSRK06wUKkaB9fgE/gqAx4sYXcKMwU0Gh88TBO6Ci+dLcmXvgPMvZ3N+Pe+Z/zrmlUpIkSZI0AG7hIeaxjG38wk9sZL/N4AE6SkWB23iBXZe3hWl0tTr84ysGP20nvLVWBL+Jtxqjli27G80M/0XjfUBbMwq8lp+5vMM/ka8aBvMKfyebHnnbQWejQt/Fc3zFpuaZ+t/g3fiE31pjOwyL64Z/ij2tN3Cd8OM4VAwvrxp+JJsCRfEHK1jMsp1/fkI/9hXbBh6dV+CjeLw5sWOjL3tdMXl1vMCk+NQwXC/wTZzK4RIVCqyL11go8EO8PocCFfFaCwW+i1c1FFgSr0oo8Ey8VkOB+zgQp4X6XvBenEbrBXoinEZltB8/UgwV6C5wGcNnnUonIykx+6+7wVDBl9PshR/AcA/vCjadymcumwuK9GIiO7Guhp2viYGr2TMXwrQ58YdNkiRJktKRvzLZoq9catezAAAAAElFTkSuQmCC"></img>
          </div>
          <p className="font-medium text-lg text-center mt-10 mr-1 ml-1">
            The Weather App is a project created as part of my learning journey
            with TheOdinProject Course. It utilizes HTML, CSS, Tailwind CSS, and
            JavaScript to offer a seamless user experience for checking the
            weather.
          </p>
        </div>
        <div className="back">
          <div className="flex flex-col justify-between items-center">
            <p className="text-center font-medium text-lg mt-2 ml-1 mr-1">
              Search and Display: Enter the name of the location you want to
              check, and the app will display the current weather along with
              forecasts for the next two days. Detailed Information: The app
              shows temperatures, max temperatures, and wind speed for each day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
