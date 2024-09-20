import React from "react";
import AnimatedGif1 from "../assets/AnimatedGif1";
import AnimatedGif2 from "../assets/AnimatedGif2";
import AnimatedGif3 from "../assets/AnimatedGif3";
import logo from "../assets/logo.png";

const Contact = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="bg-orange-500 flex items-center justify-center w-screen shadow-lg mt-10">
        <div className="text-center text-white font-medium mx-4">
          <div className="flex justify-center items-center w-25 mt-5">
            {" "}
            <button
              className="cursor-pointer"
              onClick={() => scrollToSection("section0")}
            >
              <img src={logo} alt="" />
            </button>
          </div>
          <div className="flex justify-center items-center">
            <a
              href="https://github.com/StefanYves"
              target="_blank"
              rel="noreferrer"
            >
              <div className="mr-2">
                <AnimatedGif1 />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/stefan-nisipeanu-452600255/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <AnimatedGif2 />
              </div>
            </a>

            <a
              href="mailto:stefannisipeanu02@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="ml-2">
                <AnimatedGif3 />
              </div>
            </a>
          </div>

          <p className="max-w-2xl text-xl mb-10 mt-5">Made by me @2024</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
