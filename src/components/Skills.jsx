import React, { useEffect, useState } from "react";

const Skills = ({ value, duration }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let animationFrameId = null;
    let timeoutId = null;

    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        const progressBar = document.getElementById("progress-bar");
        const progressBarPosition = progressBar.getBoundingClientRect().top;
        const windowBottom = window.innerHeight;

        if (progressBarPosition < windowBottom) {
          const totalFrames = value;
          let frame = 0;

          const animate = () => {
            animationFrameId = requestAnimationFrame(() => {
              setWidth((prevWidth) => {
                if (prevWidth < value) {
                  frame++;
                  return (frame / totalFrames) * 100;
                }
                cancelAnimationFrame(animationFrameId);
                return prevWidth;
              });
              animate();
            });
          };

          animate();
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
    };
  }, [value, duration]);

  return (
    <div id="progress-bar" className="relative w-1/2 h-4 bg-gray-200">
      <div
        className="absolute top-0 left-0 h-full bg-blue-500"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

export default Skills;
