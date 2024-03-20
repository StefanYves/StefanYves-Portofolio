import React from "react";
import { Fade } from "react-reveal";

const SkillDescription = () => {
  return (
    <div class="bg-violet-800 flex items-center justify-center shadow-lg rounded-xl mt-10">
      <div class="text-center text-white font-medium mx-4">
        <h1 className="font-Russo mb-2 mt-10 text-2xl">My Skills</h1>
        <p class="max-w-2xl text-xl mb-10">
          <Fade left>
            As a passionate third-year student, I have dedicated myself to
            honing my web development skills in HTML, CSS, JavaScript, React,
            Webpack and Git. With a solid foundation in these technologies, I am
            eager to collaborate and contribute to the creation of impactful
            websites.
          </Fade>
        </p>
      </div>
    </div>
  );
};

export default SkillDescription;
