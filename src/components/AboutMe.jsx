import React, { useRef } from "react";
import img from "../assets/img.jpg";
import { motion, useInView } from "framer-motion";

const AboutMe = () => {
  const headerText =
    "Passionate Web Developer | Creating Engaging Digital Experiences".split(
      " "
    );

  const paragraphText =
    " Designing and coding beautifully simple solutions with love and passion.".split(
      " "
    );

  const descriptionHeader =
    " Welcome to my portfolio! I'm Stefan, nice to meet you!".split(" ");
  const descriptionParagraph =
    " Passionate web developer and computer science graduate at the Romanian American University in Bucharest. I create captivating digital experiences, blending academic knowledge with creative problem-solving. From sleek interfaces to seamless functionality, I deliver exceptional results.".split(
      " "
    );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div>
      <div className="w-screen mt-20 p-20">
        <div className="flex-col text-center md:text-4xl text-2xl">
          <h1 className="font-Russo">
            {" "}
            {headerText.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </h1>

          <p className="md:text-2xl text-lg mt-5 font-medium">
            {" "}
            {paragraphText.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </p>

          {/* <Model /> */}
          <section id="section1"></section>

          <div className="flex items-center justify-center">
            <img src={img} alt="" className="md:w-2/3 md:h-1/4 w-full h-60" />
          </div>
        </div>
      </div>
      <div>
        <div className="bg-orange-500 flex items-center justify-center w-screen shadow-lg -mt-20">
          <div className="text-center text-white font-medium mx-4">
            <h1 className="font-Russo mb-2 mt-24 text-2xl">
              {descriptionHeader.map((el, i) => (
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

            <p className="max-w-2xl text-xl mb-20">
              {descriptionParagraph.map((el, i) => (
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
      </div>
    </div>
  );
};

export default AboutMe;
