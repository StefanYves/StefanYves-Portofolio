import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SkillDescription = () => {
  const titleText = "My Skills".split(" ");

  const descriptionText =
    "As a fullstack developer, I have dedicated myself to honing my web development skills in Frontend and Backend technologies. With a solid foundation in these technologies, I am eager to collaborate and contribute to the creation of impactful websites.".split(
      " "
    );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-violet-800 flex items-center justify-center shadow-lg rounded-xl mt-10">
      <div className="text-center text-white font-medium mx-4">
        <h1 className="font-Russo mb-2 mt-10 text-2xl">
          {" "}
          {titleText.map((el, i) => (
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
        </h1>
        <p className="max-w-2xl text-xl mb-10">
          {" "}
          {descriptionText.map((el, i) => (
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

export default SkillDescription;
