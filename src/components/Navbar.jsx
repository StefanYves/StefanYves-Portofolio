import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Fade } from "react-reveal";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="inset-x-0 top-0 p-1">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-7 w-24 h-24 md:ml-24">
          <Fade down>
            <button
              className="cursor-pointer"
              onClick={() => scrollToSection("section0")}
            >
              <img src={logo} alt="" />
            </button>
          </Fade>
        </div>

        <div className="hidden md:flex items-center space-x-1 mr-4">
          <Fade down>
            <button
              type="button"
              className="px-5 py-2.5 relative rounded group overflow-hidden font-medium  text-purple-500 inline-block font-Russo"
              onClick={() => scrollToSection("section1")}
            >
              <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-500 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>

              <span class="relative group-hover:text-white">About Me</span>
            </button>
          </Fade>
          <Fade down>
            <button
              type="button"
              className="px-5 py-2.5 relative rounded group overflow-hidden font-medium  text-purple-500 inline-block font-Russo"
              onClick={() => scrollToSection("section2")}
            >
              <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-500 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
              <span class="relative group-hover:text-white">Skills</span>
            </button>
          </Fade>
          <Fade down>
            <button
              type="button"
              className="px-5 py-2.5 relative rounded group overflow-hidden font-medium font-Russo text-purple-500 inline-block "
              onClick={() => scrollToSection("section3")}
            >
              <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-500 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
              <span class="relative group-hover:text-white">Projects</span>
            </button>
          </Fade>
          <Fade down>
            <button
              type="button"
              className="px-5 py-2.5 relative rounded group overflow-hidden font-medium  text-purple-500 inline-block font-Russo"
              onClick={() => scrollToSection("section4")}
            >
              <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-500 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
              <span class="relative group-hover:text-white">Contact</span>
            </button>
          </Fade>
        </div>
        <div className="flex md:hidden lg:hidden">
          <Fade down>
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </Fade>
        </div>
      </div>

      <div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <Fade>
            <ul className="md:hidden items-center justify-center space-y-8 ml-5">
              <li
                className="text-purple-500 font-medium font-Russo hover:text-violet-800 text-xl"
                onClick={() => scrollToSection("section1")}
              >
                <a href="#n">About Me</a>
              </li>

              <li
                className="text-purple-500 font-medium font-Russo hover:text-violet-800 text-xl"
                onClick={() => scrollToSection("section2")}
              >
                <a href="#n">Skills</a>
              </li>
              <li
                className="text-purple-500 font-medium font-Russo hover:text-violet-800 text-xl"
                onClick={() => scrollToSection("section3")}
              >
                <a href="#n">Projects</a>
              </li>
              <li
                className="text-purple-500 font-medium font-Russo hover:text-violet-800 text-xl"
                onClick={() => scrollToSection("section4")}
              >
                <a href="#n">Contact</a>
              </li>
            </ul>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
