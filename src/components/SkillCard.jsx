import React from "react";
import Skills from "./Skills";
import skill from "../assets/skills.png";
import { Fade } from "react-reveal";

const SkillCard = () => {
  return (
    <div class="flex flex-col items-center justify-center mt-20 mb-20">
      <div class="bg-violet-800 rounded-lg shadow-lg p-6 w-full md:w-2/3 lg:w-1/2">
        <div className="flex justify-center items-center mb-2 -mt-2">
          <img src={skill} alt="skills" />
        </div>

        <div class="flex flex-col">
          <div class="flex items-center justify-between">
            <p class="text-white text-lg md:text-xl lg:text-2xl font-medium w-1/5 md:w-1/12">
              <Fade left>HTML</Fade>
            </p>
            <Skills value={90} duration={1000} />
            <p class="text-white font-medium">
              <Fade right>90%</Fade>
            </p>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-white text-lg md:text-xl lg:text-2xl font-medium w-1/5 md:w-1/12">
              <Fade left>CSS</Fade>
            </p>
            <Skills value={90} duration={1000} />
            <p class="text-white font-medium">
              <Fade right>90%</Fade>
            </p>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-white text-lg md:text-xl lg:text-2xl font-medium w-1/5 md:w-1/12">
              <Fade left>JavaScript</Fade>
            </p>
            <Skills value={75} duration={1000} />
            <p class="text-white font-medium">
              <Fade right>75%</Fade>
            </p>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-white text-lg md:text-xl lg:text-2xl font-medium w-1/5 md:w-1/12">
              <Fade left>React</Fade>
            </p>
            <Skills value={25} duration={1000} />
            <p class="text-white font-medium">
              <Fade right>25%</Fade>
            </p>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-white text-lg md:text-xl lg:text-2xl font-medium w-1/5 md:w-1/12">
              <Fade left>Git</Fade>
            </p>
            <Skills value={50} duration={1000} />
            <p class="text-white font-medium">
              <Fade right>50%</Fade>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
