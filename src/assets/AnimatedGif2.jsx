import React from "react";
import linkedin from "./linkedin.png";

const AnimatedGif2 = () => {
  return (
    <div>
      <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none p-2 border-none bg-white hover:bg-violet-800 hover:ease-in-out rounded-full w-12">
        <img src={linkedin} alt="First" className="" />
      </div>
    </div>
  );
};

export default AnimatedGif2;
