import React, { useRef, useEffect } from "react";
import useMousePosition from "./useMousePosition";
import Skills from "./Skills";

const MovingContainer = () => {
  const containerRef = useRef(null);
  const { x, y } = useMousePosition();

  useEffect(() => {
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();

    const handleMouseMove = () => {
      const containerCenterX = containerRect.left + containerRect.width / 2;
      const containerCenterY = containerRect.top + containerRect.height / 2;

      const dx = x - containerCenterX;
      const dy = y - containerCenterY;

      const skewX = dy / 200; // Adjust the skew factor as per your preference
      const skewY = dx / 200; // Adjust the skew factor as per your preference

      container.style.transform = `skew(${skewX}deg, ${skewY}deg)`;
    };

    handleMouseMove(); // Initial positioning

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);

  return (
    <div ref={containerRef}>
      <div class="flex flex-col items-center justify-center mt-20 mb-20">
        <div class="bg-orange-500 rounded-lg shadow-lg p-6 w-full md:w-2/3 lg:w-1/2">
          <h1 class="text-2xl mb-4 text-white font-Russo text-center">
            Skills
          </h1>
          <div class="flex flex-col">
            <div class="flex items-center justify-between">
              <p class="text-white text-lg md:text-xl lg:text-2xl font-medium w-1/5 md:w-1/12">
                HTML
              </p>
              <Skills value={90} duration={1000} />
              <p class="text-white font-medium">90%</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-white text-lg md:text-xl lg:text-2xl font-medium w-1/5 md:w-1/12">
                CSS
              </p>
              <Skills value={90} duration={1000} />
              <p class="text-white font-medium">90%</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-white text-lg md:text-xl lg:text-2xl font-medium w-1/5 md:w-1/12">
                JavaScript
              </p>
              <Skills value={75} duration={1000} />
              <p class="text-white font-medium">75%</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-white text-lg md:text-xl lg:text-2xl font-medium w-1/5 md:w-1/12">
                React
              </p>
              <Skills value={50} duration={1000} />
              <p class="text-white font-medium">50%</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-white text-lg md:text-xl lg:text-2xl font-medium w-1/5 md:w-1/12">
                Git
              </p>
              <Skills value={25} duration={1000} />
              <p class="text-white font-medium">25%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingContainer;
