import React, { useRef } from "react";
import project from "../assets/projects.png";
import { motion, useInView } from "framer-motion";

const ProjectDescription = () => {
  const text =
    "Discover my web development projects below, showcasing innovative design and seamless functionality. Click on each project to explore further into the world of web development.".split(
      " "
    );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-orange-500 flex items-center justify-center w-screen shadow-lg mt-10 md:mt-0">
      <div className="text-center text-white font-medium mx-4">
        <div className="flex justify-center items-center mb-2 mt-5">
          <img src={project} alt="projects" />
        </div>
        <p className="max-w-2xl text-xl mb-10">
          {text.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{
                duration: 0.25,
                delay: i / 10,
              }}
              key={i}
              ref={ref}
            >
              {el}{" "}
            </motion.span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ProjectDescription;
