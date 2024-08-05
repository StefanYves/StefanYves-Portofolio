import React from "react";
import { Fade } from "react-reveal";
import Model from "./Model";
import img from "../assets/img.jpg";

const AboutMe = () => {
  return (
    <div>
      <div className="w-screen mt-20 p-20">
        <div className="flex-col text-center md:text-4xl text-2xl">
          <Fade left>
            <h1 className="font-Russo">
              Passionate Web Developer | Creating Engaging Digital Experiences
            </h1>
          </Fade>
          <Fade right>
            <p className="md:text-2xl text-lg mt-5 font-medium">
              Designing and coding beautifully simple solutions with love and
              passion.
            </p>
          </Fade>
          {/* <Model /> */}
          <section id="section1"></section>
          <Fade>
            <div className="flex items-center justify-center">
              <img src={img} alt="" className="md:w-2/3 md:h-1/4 w-full h-60" />
            </div>
          </Fade>
        </div>
      </div>
      <div>
        <div class="bg-orange-500 flex items-center justify-center w-screen shadow-lg -mt-20">
          <div class="text-center text-white font-medium mx-4">
            <h1 className="font-Russo mb-2 mt-24 text-2xl">
              <Fade left>
                Welcome to my portfolio! I'm Stefan, nice to meet you!
              </Fade>
            </h1>

            <p class="max-w-2xl text-xl mb-20">
              <Fade left>
                Passionate web developer and computer science graduate at the
                Romanian American University in Bucharest. I create captivating
                digital experiences, blending academic knowledge with creative
                problem-solving. From sleek interfaces to seamless
                functionality, I deliver exceptional results.
              </Fade>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
