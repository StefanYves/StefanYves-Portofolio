import React from "react";
import project from "../assets/projects.png";
import { Fade } from "react-reveal";

const ProjectDescription = () => {
  return (
    <div class="bg-orange-500 flex items-center justify-center w-screen shadow-lg mt-10 md:mt-0">
      <div class="text-center text-white font-medium mx-4">
        <div className="flex justify-center items-center mb-2 mt-5">
          <img src={project} alt="projects" />
        </div>
        <p class="max-w-2xl text-xl mb-10">
          <Fade left>
            Discover my web development projects below, showcasing innovative
            design and seamless functionality. Click on each project to explore
            further into the world of web development.
          </Fade>
        </p>
      </div>
    </div>
  );
};

export default ProjectDescription;
