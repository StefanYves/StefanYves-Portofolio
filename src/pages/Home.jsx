import React from "react";
import Card from "../components/Card.jsx";
import Card2 from "../components/Card2.jsx";
import Card3 from "../components/Card3.jsx";
import Card4 from "../components/Card4.jsx";
import Navbar from "../components/Navbar.jsx";
import AboutMe from "../components/AboutMe.jsx";
import SkillCard from "../components/SkillCard.jsx";
import Contact from "../components/Contact.jsx";
import SkillDescription from "../components/SkillDescription.jsx";
import ProjectDescription from "../components/ProjectDescription.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import link from "../assets/link.png";
import { Fade } from "react-reveal";

const Home = () => {
  return (
    <div className="min-h-screen  overflow-x-hidden">
      <section id="section0"></section>
      <Navbar />

      <AboutMe />
      <section id="section2"></section>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/3 w-full">
          <SkillCard />
        </div>
        <div className="md:w-1/4 md:mr-40 w-full">
          <SkillDescription />
        </div>
      </div>
      <section id="section3"></section>
      <ProjectDescription />
      <div className="flex flex-col md:flex-row items-center justify-center mt-10">
        <div className="flex-col justify-center items-center m-5">
          <Fade left>
            <Card />
          </Fade>
          <a
            href="https://onlinerock.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Fade left>
              <div className="flex items-center justify-center mt-5">
                <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none p-2 border-none bg-white hover:bg-violet-800 hover:ease-in-out rounded-full w-14">
                  <img src={link} alt="" />
                </div>
              </div>
            </Fade>
          </a>
        </div>
        <div className="flex-col items-center justify-center m-5">
          <Fade left>
            <Card2 />
          </Fade>
          <a
            href="https://react-chatapp-49cb4.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Fade left>
              <div className="flex items-center justify-center mt-5">
                <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none p-2 border-none bg-white hover:bg-violet-800 hover:ease-in-out rounded-full w-14">
                  <img src={link} alt="" />
                </div>
              </div>
            </Fade>
          </a>
        </div>
        <div className="flex-col items-center justify-center m-5">
          <Fade right>
            <Card3 />
          </Fade>
          <a href="https://nismobdesign.ro/" target="_blank" rel="noreferrer">
            <Fade right>
              <div className="flex items-center justify-center mt-5">
                <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none p-2 border-none bg-white hover:bg-violet-800 hover:ease-in-out rounded-full w-14">
                  <img src={link} alt="" />
                </div>
              </div>
            </Fade>
          </a>
        </div>
        <div className="flex-col items-center justify-center m-5">
          <Fade right>
            <Card4 />
          </Fade>
          <a href="/" target="_blank" rel="noreferrer">
            <Fade right>
              <div className="flex items-center justify-center mt-5">
                <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none p-2 border-none bg-white hover:bg-violet-800 hover:ease-in-out rounded-full w-14">
                  <img src={link} alt="" />
                </div>
              </div>
            </Fade>
          </a>
        </div>
      </div>
      <Contact />
      <section id="section4"></section>
      <ScrollToTop />
    </div>
  );
};

export default Home;
