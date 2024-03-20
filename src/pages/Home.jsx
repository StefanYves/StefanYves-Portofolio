import React from "react";
import Card from "../components/Card.jsx";
import Card2 from "../components/Card2.jsx";
import Card3 from "../components/Card3.jsx";
import Card4 from "../components/Card4.jsx";
import Card5 from "../components/Card5.jsx";
import Card6 from "../components/Card6.jsx";
import Card7 from "../components/Card7.jsx";
import Card8 from "../components/Card8.jsx";
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
      <div className="flex flex-wrap flex-col md:flex-row items-center justify-center mt-10">
        <div className="flex-col justify-center items-center m-5">
          <Fade left>
            <Card />
          </Fade>
          <div className="flex justify-center">
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
            <a
              href="https://github.com/StefanYves/online-rock-paper-scissors"
              target="_blank"
              rel="noreferrer"
            >
              <Fade left>
                <div className="flex items-center justify-center mt-5">
                  <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none p-2 border-none bg-white hover:bg-violet-800 hover:ease-in-out rounded-full w-14">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVR4nO2ZSWgVQRCGP2OCS3CJYoy7uCtiDi6o8aAIikvQi4oGvCiiRo2E6FXJQdxQg4LgUTx4cyPuHhVRD0bcsyDu4IJrTNTnSEMNPOfNm1czb2YSJD8UDNNT1fV3V1dX90AH/l8UAEuBfUAt8Bj4CLSKmOdH0ma+WQL0pp2gC1AGXAJ+A5ZPMToXgFViK3Z0AyqBVwGcTycvga1A17hILAAaQiTglHpgfpQEzNTXREjAKcdl5kNFf+BOjCQskVtAYVgkhst0W20kT8WHrNBP0qjVxtIAFAUl0bWNwsnyCLNAKfpoO3DecsjhICnWy+B2CbspwA7gWRbOmd1+G1As1cGBDN/P05LoptgnBruEoSH0A7gKVACzgNFAvsgYebcROAN8BTYDnR22ihWLXxVilYpRTLf75mlHy+PbAYr+zUB5oouy7Ah9o0pCkaL/F5lmpUwZ1+MiJFKi9GGll5FLSiPLIyRSrvThfDoDBT5K8eoIiRxT+vAL6OlmYKnSwGdZkFFhPPBT6Uupm4H9SmWT56PGSaUve92Ua5XK02Igskzpy1k35afKuMyNgchYJRFT0KbgvULRfBMHhiiJvHNTblUomm86xUBkoiMKPor8cfjT4qZsZ4rZUu+MAPoAA+XZljiIJCNXtoYC6dtUFYOSBjYFn6TxJnAXaJRQeiPPtqwgehz2iIrvScvAzFIKnkjjNUmxWyRPm4p1khw37VGJGjnS11BggmTKRVI575a7MPsIkIKL0rhLqsuDwCngOlAns/FBpnN1xLPRIqPdBDwAbgPngCNyFtrvVaZUKzOFkW8yU2FjncuC9pKdbkbm+jBgpBlYE1KomZJ8j08SRua4GeuuTMFOuSFryXnS0yBfBqMxQL8tXucie504xZxT1soGlM7wW+AEsEFGaiTQK8l2XznHmOvQKikvvgYgYImYkiotSj1SXomcwd8qw65KbihtFMq75iyct5JkYaa015RGsU7apwJfMpAwpNOhJAQy9eKLJyo8DJhcbpcQFyU07J84z4ErwOJMHQDrsyRSrr3duBckLn0gx6MPK4Pc9VOBzwQSLkYSIe4fGwKQSADT/XZ0JI2xT3KxNlgTpx4YFYBITZCO8qTu8tNRZ5/2/di+7PMC8B/09BnLfqG1+yCMP8DDgIdtSOS+nBhDQQ+pNOMmciWKf/F5UmInYiCSAA5FfdExWc4HURGpA2YQE3IlBTc4fvj7xeskfWNrU0zXTSnIkbLldFL54gelorswyz2pAx0gIvwFLXDNiM6zHVAAAAAASUVORK5CYII=" />
                  </div>
                </div>
              </Fade>
            </a>
          </div>
        </div>
        <div className="flex-col items-center justify-center m-5">
          <Fade left>
            <Card2 />
          </Fade>
          <div className="flex justify-center">
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
            <a
              href="https://github.com/StefanYves/React-ChatApp"
              target="_blank"
              rel="noreferrer"
            >
              <Fade left>
                <div className="flex items-center justify-center mt-5">
                  <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none p-2 border-none bg-white hover:bg-violet-800 hover:ease-in-out rounded-full w-14">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVR4nO2ZSWgVQRCGP2OCS3CJYoy7uCtiDi6o8aAIikvQi4oGvCiiRo2E6FXJQdxQg4LgUTx4cyPuHhVRD0bcsyDu4IJrTNTnSEMNPOfNm1czb2YSJD8UDNNT1fV3V1dX90AH/l8UAEuBfUAt8Bj4CLSKmOdH0ma+WQL0pp2gC1AGXAJ+A5ZPMToXgFViK3Z0AyqBVwGcTycvga1A17hILAAaQiTglHpgfpQEzNTXREjAKcdl5kNFf+BOjCQskVtAYVgkhst0W20kT8WHrNBP0qjVxtIAFAUl0bWNwsnyCLNAKfpoO3DecsjhICnWy+B2CbspwA7gWRbOmd1+G1As1cGBDN/P05LoptgnBruEoSH0A7gKVACzgNFAvsgYebcROAN8BTYDnR22ihWLXxVilYpRTLf75mlHy+PbAYr+zUB5oouy7Ah9o0pCkaL/F5lmpUwZ1+MiJFKi9GGll5FLSiPLIyRSrvThfDoDBT5K8eoIiRxT+vAL6OlmYKnSwGdZkFFhPPBT6Uupm4H9SmWT56PGSaUve92Ua5XK02Igskzpy1k35afKuMyNgchYJRFT0KbgvULRfBMHhiiJvHNTblUomm86xUBkoiMKPor8cfjT4qZsZ4rZUu+MAPoAA+XZljiIJCNXtoYC6dtUFYOSBjYFn6TxJnAXaJRQeiPPtqwgehz2iIrvScvAzFIKnkjjNUmxWyRPm4p1khw37VGJGjnS11BggmTKRVI575a7MPsIkIKL0rhLqsuDwCngOlAns/FBpnN1xLPRIqPdBDwAbgPngCNyFtrvVaZUKzOFkW8yU2FjncuC9pKdbkbm+jBgpBlYE1KomZJ8j08SRua4GeuuTMFOuSFryXnS0yBfBqMxQL8tXucie504xZxT1soGlM7wW+AEsEFGaiTQK8l2XznHmOvQKikvvgYgYImYkiotSj1SXomcwd8qw65KbihtFMq75iyct5JkYaa015RGsU7apwJfMpAwpNOhJAQy9eKLJyo8DJhcbpcQFyU07J84z4ErwOJMHQDrsyRSrr3duBckLn0gx6MPK4Pc9VOBzwQSLkYSIe4fGwKQSADT/XZ0JI2xT3KxNlgTpx4YFYBITZCO8qTu8tNRZ5/2/di+7PMC8B/09BnLfqG1+yCMP8DDgIdtSOS+nBhDQQ+pNOMmciWKf/F5UmInYiCSAA5FfdExWc4HURGpA2YQE3IlBTc4fvj7xeskfWNrU0zXTSnIkbLldFL54gelorswyz2pAx0gIvwFLXDNiM6zHVAAAAAASUVORK5CYII=" />
                  </div>
                </div>
              </Fade>
            </a>
          </div>
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
          <div className="flex justify-center">
            <a
              href="https://silver-cat-9745c6.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <Fade right>
                <div className="flex items-center justify-center mt-5">
                  <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none p-2 border-none bg-white hover:bg-violet-800 hover:ease-in-out rounded-full w-14">
                    <img src={link} alt="" />
                  </div>
                </div>
              </Fade>
            </a>
            <a
              href="https://github.com/StefanYves/TOP-TodoList"
              target="_blank"
              rel="noreferrer"
            >
              <Fade right>
                <div className="flex items-center justify-center mt-5">
                  <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none p-2 border-none bg-white hover:bg-violet-800 hover:ease-in-out rounded-full w-14">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVR4nO2ZSWgVQRCGP2OCS3CJYoy7uCtiDi6o8aAIikvQi4oGvCiiRo2E6FXJQdxQg4LgUTx4cyPuHhVRD0bcsyDu4IJrTNTnSEMNPOfNm1czb2YSJD8UDNNT1fV3V1dX90AH/l8UAEuBfUAt8Bj4CLSKmOdH0ma+WQL0pp2gC1AGXAJ+A5ZPMToXgFViK3Z0AyqBVwGcTycvga1A17hILAAaQiTglHpgfpQEzNTXREjAKcdl5kNFf+BOjCQskVtAYVgkhst0W20kT8WHrNBP0qjVxtIAFAUl0bWNwsnyCLNAKfpoO3DecsjhICnWy+B2CbspwA7gWRbOmd1+G1As1cGBDN/P05LoptgnBruEoSH0A7gKVACzgNFAvsgYebcROAN8BTYDnR22ihWLXxVilYpRTLf75mlHy+PbAYr+zUB5oouy7Ah9o0pCkaL/F5lmpUwZ1+MiJFKi9GGll5FLSiPLIyRSrvThfDoDBT5K8eoIiRxT+vAL6OlmYKnSwGdZkFFhPPBT6Uupm4H9SmWT56PGSaUve92Ua5XK02Igskzpy1k35afKuMyNgchYJRFT0KbgvULRfBMHhiiJvHNTblUomm86xUBkoiMKPor8cfjT4qZsZ4rZUu+MAPoAA+XZljiIJCNXtoYC6dtUFYOSBjYFn6TxJnAXaJRQeiPPtqwgehz2iIrvScvAzFIKnkjjNUmxWyRPm4p1khw37VGJGjnS11BggmTKRVI575a7MPsIkIKL0rhLqsuDwCngOlAns/FBpnN1xLPRIqPdBDwAbgPngCNyFtrvVaZUKzOFkW8yU2FjncuC9pKdbkbm+jBgpBlYE1KomZJ8j08SRua4GeuuTMFOuSFryXnS0yBfBqMxQL8tXucie504xZxT1soGlM7wW+AEsEFGaiTQK8l2XznHmOvQKikvvgYgYImYkiotSj1SXomcwd8qw65KbihtFMq75iyct5JkYaa015RGsU7apwJfMpAwpNOhJAQy9eKLJyo8DJhcbpcQFyU07J84z4ErwOJMHQDrsyRSrr3duBckLn0gx6MPK4Pc9VOBzwQSLkYSIe4fGwKQSADT/XZ0JI2xT3KxNlgTpx4YFYBITZCO8qTu8tNRZ5/2/di+7PMC8B/09BnLfqG1+yCMP8DDgIdtSOS+nBhDQQ+pNOMmciWKf/F5UmInYiCSAA5FfdExWc4HURGpA2YQE3IlBTc4fvj7xeskfWNrU0zXTSnIkbLldFL54gelorswyz2pAx0gIvwFLXDNiM6zHVAAAAAASUVORK5CYII=" />
                  </div>
                </div>
              </Fade>
            </a>
          </div>
        </div>
        <div className="flex-col items-center justify-center m-5">
          <Fade right>
            <Card5 />
          </Fade>
          <div className="flex justify-center">
            <a
              href="https://fluffy-lamington-c0b466.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Fade right>
                <div className="flex items-center justify-center mt-5">
                  <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none p-2 border-none bg-white hover:bg-violet-800 hover:ease-in-out rounded-full w-14">
                    <img src={link} alt="" />
                  </div>
                </div>
              </Fade>
            </a>
            <a
              href="https://github.com/StefanYves/TOP-Library"
              target="_blank"
              rel="noreferrer"
            >
              <Fade right>
                <div className="flex items-center justify-center mt-5">
                  <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none p-2 border-none bg-white hover:bg-violet-800 hover:ease-in-out rounded-full w-14">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVR4nO2ZSWgVQRCGP2OCS3CJYoy7uCtiDi6o8aAIikvQi4oGvCiiRo2E6FXJQdxQg4LgUTx4cyPuHhVRD0bcsyDu4IJrTNTnSEMNPOfNm1czb2YSJD8UDNNT1fV3V1dX90AH/l8UAEuBfUAt8Bj4CLSKmOdH0ma+WQL0pp2gC1AGXAJ+A5ZPMToXgFViK3Z0AyqBVwGcTycvga1A17hILAAaQiTglHpgfpQEzNTXREjAKcdl5kNFf+BOjCQskVtAYVgkhst0W20kT8WHrNBP0qjVxtIAFAUl0bWNwsnyCLNAKfpoO3DecsjhICnWy+B2CbspwA7gWRbOmd1+G1As1cGBDN/P05LoptgnBruEoSH0A7gKVACzgNFAvsgYebcROAN8BTYDnR22ihWLXxVilYpRTLf75mlHy+PbAYr+zUB5oouy7Ah9o0pCkaL/F5lmpUwZ1+MiJFKi9GGll5FLSiPLIyRSrvThfDoDBT5K8eoIiRxT+vAL6OlmYKnSwGdZkFFhPPBT6Uupm4H9SmWT56PGSaUve92Ua5XK02Igskzpy1k35afKuMyNgchYJRFT0KbgvULRfBMHhiiJvHNTblUomm86xUBkoiMKPor8cfjT4qZsZ4rZUu+MAPoAA+XZljiIJCNXtoYC6dtUFYOSBjYFn6TxJnAXaJRQeiPPtqwgehz2iIrvScvAzFIKnkjjNUmxWyRPm4p1khw37VGJGjnS11BggmTKRVI575a7MPsIkIKL0rhLqsuDwCngOlAns/FBpnN1xLPRIqPdBDwAbgPngCNyFtrvVaZUKzOFkW8yU2FjncuC9pKdbkbm+jBgpBlYE1KomZJ8j08SRua4GeuuTMFOuSFryXnS0yBfBqMxQL8tXucie504xZxT1soGlM7wW+AEsEFGaiTQK8l2XznHmOvQKikvvgYgYImYkiotSj1SXomcwd8qw65KbihtFMq75iyct5JkYaa015RGsU7apwJfMpAwpNOhJAQy9eKLJyo8DJhcbpcQFyU07J84z4ErwOJMHQDrsyRSrr3duBckLn0gx6MPK4Pc9VOBzwQSLkYSIe4fGwKQSADT/XZ0JI2xT3KxNlgTpx4YFYBITZCO8qTu8tNRZ5/2/di+7PMC8B/09BnLfqG1+yCMP8DDgIdtSOS+nBhDQQ+pNOMmciWKf/F5UmInYiCSAA5FfdExWc4HURGpA2YQE3IlBTc4fvj7xeskfWNrU0zXTSnIkbLldFL54gelorswyz2pAx0gIvwFLXDNiM6zHVAAAAAASUVORK5CYII=" />
                  </div>
                </div>
              </Fade>
            </a>
          </div>
        </div>
        <div className="flex-col items-center justify-center m-5">
          <Fade right>
            <Card6 />
          </Fade>
          <div className="flex justify-center">
            <a
              href="https://jocular-horse-2e8e34.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <Fade right>
                <div className="flex items-center justify-center mt-5">
                  <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none p-2 border-none bg-white hover:bg-violet-800 hover:ease-in-out rounded-full w-14">
                    <img src={link} alt="" />
                  </div>
                </div>
              </Fade>
            </a>
            <a
              href="https://github.com/StefanYves/TOPTicTacToe"
              target="_blank"
              rel="noreferrer"
            >
              <Fade right>
                <div className="flex items-center justify-center mt-5">
                  <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none p-2 border-none bg-white hover:bg-violet-800 hover:ease-in-out rounded-full w-14">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVR4nO2ZSWgVQRCGP2OCS3CJYoy7uCtiDi6o8aAIikvQi4oGvCiiRo2E6FXJQdxQg4LgUTx4cyPuHhVRD0bcsyDu4IJrTNTnSEMNPOfNm1czb2YSJD8UDNNT1fV3V1dX90AH/l8UAEuBfUAt8Bj4CLSKmOdH0ma+WQL0pp2gC1AGXAJ+A5ZPMToXgFViK3Z0AyqBVwGcTycvga1A17hILAAaQiTglHpgfpQEzNTXREjAKcdl5kNFf+BOjCQskVtAYVgkhst0W20kT8WHrNBP0qjVxtIAFAUl0bWNwsnyCLNAKfpoO3DecsjhICnWy+B2CbspwA7gWRbOmd1+G1As1cGBDN/P05LoptgnBruEoSH0A7gKVACzgNFAvsgYebcROAN8BTYDnR22ihWLXxVilYpRTLf75mlHy+PbAYr+zUB5oouy7Ah9o0pCkaL/F5lmpUwZ1+MiJFKi9GGll5FLSiPLIyRSrvThfDoDBT5K8eoIiRxT+vAL6OlmYKnSwGdZkFFhPPBT6Uupm4H9SmWT56PGSaUve92Ua5XK02Igskzpy1k35afKuMyNgchYJRFT0KbgvULRfBMHhiiJvHNTblUomm86xUBkoiMKPor8cfjT4qZsZ4rZUu+MAPoAA+XZljiIJCNXtoYC6dtUFYOSBjYFn6TxJnAXaJRQeiPPtqwgehz2iIrvScvAzFIKnkjjNUmxWyRPm4p1khw37VGJGjnS11BggmTKRVI575a7MPsIkIKL0rhLqsuDwCngOlAns/FBpnN1xLPRIqPdBDwAbgPngCNyFtrvVaZUKzOFkW8yU2FjncuC9pKdbkbm+jBgpBlYE1KomZJ8j08SRua4GeuuTMFOuSFryXnS0yBfBqMxQL8tXucie504xZxT1soGlM7wW+AEsEFGaiTQK8l2XznHmOvQKikvvgYgYImYkiotSj1SXomcwd8qw65KbihtFMq75iyct5JkYaa015RGsU7apwJfMpAwpNOhJAQy9eKLJyo8DJhcbpcQFyU07J84z4ErwOJMHQDrsyRSrr3duBckLn0gx6MPK4Pc9VOBzwQSLkYSIe4fGwKQSADT/XZ0JI2xT3KxNlgTpx4YFYBITZCO8qTu8tNRZ5/2/di+7PMC8B/09BnLfqG1+yCMP8DDgIdtSOS+nBhDQQ+pNOMmciWKf/F5UmInYiCSAA5FfdExWc4HURGpA2YQE3IlBTc4fvj7xeskfWNrU0zXTSnIkbLldFL54gelorswyz2pAx0gIvwFLXDNiM6zHVAAAAAASUVORK5CYII=" />
                  </div>
                </div>
              </Fade>
            </a>
          </div>
        </div>
        <div className="flex-col items-center justify-center m-5">
          <Fade right>
            <Card7 />
          </Fade>
          <div className="flex justify-center">
            <a
              href="https://admirable-moonbeam-b2f698.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <Fade right>
                <div className="flex items-center justify-center mt-5">
                  <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none p-2 border-none bg-white hover:bg-violet-800 hover:ease-in-out rounded-full w-14">
                    <img src={link} alt="" />
                  </div>
                </div>
              </Fade>
            </a>
            <a
              href="https://github.com/StefanYves/TheOdinProject-Etch-a-Sketch"
              target="_blank"
              rel="noreferrer"
            >
              <Fade right>
                <div className="flex items-center justify-center mt-5">
                  <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none p-2 border-none bg-white hover:bg-violet-800 hover:ease-in-out rounded-full w-14">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVR4nO2ZSWgVQRCGP2OCS3CJYoy7uCtiDi6o8aAIikvQi4oGvCiiRo2E6FXJQdxQg4LgUTx4cyPuHhVRD0bcsyDu4IJrTNTnSEMNPOfNm1czb2YSJD8UDNNT1fV3V1dX90AH/l8UAEuBfUAt8Bj4CLSKmOdH0ma+WQL0pp2gC1AGXAJ+A5ZPMToXgFViK3Z0AyqBVwGcTycvga1A17hILAAaQiTglHpgfpQEzNTXREjAKcdl5kNFf+BOjCQskVtAYVgkhst0W20kT8WHrNBP0qjVxtIAFAUl0bWNwsnyCLNAKfpoO3DecsjhICnWy+B2CbspwA7gWRbOmd1+G1As1cGBDN/P05LoptgnBruEoSH0A7gKVACzgNFAvsgYebcROAN8BTYDnR22ihWLXxVilYpRTLf75mlHy+PbAYr+zUB5oouy7Ah9o0pCkaL/F5lmpUwZ1+MiJFKi9GGll5FLSiPLIyRSrvThfDoDBT5K8eoIiRxT+vAL6OlmYKnSwGdZkFFhPPBT6Uupm4H9SmWT56PGSaUve92Ua5XK02Igskzpy1k35afKuMyNgchYJRFT0KbgvULRfBMHhiiJvHNTblUomm86xUBkoiMKPor8cfjT4qZsZ4rZUu+MAPoAA+XZljiIJCNXtoYC6dtUFYOSBjYFn6TxJnAXaJRQeiPPtqwgehz2iIrvScvAzFIKnkjjNUmxWyRPm4p1khw37VGJGjnS11BggmTKRVI575a7MPsIkIKL0rhLqsuDwCngOlAns/FBpnN1xLPRIqPdBDwAbgPngCNyFtrvVaZUKzOFkW8yU2FjncuC9pKdbkbm+jBgpBlYE1KomZJ8j08SRua4GeuuTMFOuSFryXnS0yBfBqMxQL8tXucie504xZxT1soGlM7wW+AEsEFGaiTQK8l2XznHmOvQKikvvgYgYImYkiotSj1SXomcwd8qw65KbihtFMq75iyct5JkYaa015RGsU7apwJfMpAwpNOhJAQy9eKLJyo8DJhcbpcQFyU07J84z4ErwOJMHQDrsyRSrr3duBckLn0gx6MPK4Pc9VOBzwQSLkYSIe4fGwKQSADT/XZ0JI2xT3KxNlgTpx4YFYBITZCO8qTu8tNRZ5/2/di+7PMC8B/09BnLfqG1+yCMP8DDgIdtSOS+nBhDQQ+pNOMmciWKf/F5UmInYiCSAA5FfdExWc4HURGpA2YQE3IlBTc4fvj7xeskfWNrU0zXTSnIkbLldFL54gelorswyz2pAx0gIvwFLXDNiM6zHVAAAAAASUVORK5CYII=" />
                  </div>
                </div>
              </Fade>
            </a>
          </div>
        </div>
        <div className="flex-col items-center justify-center m-5">
          <Fade right>
            <Card8 />
          </Fade>
          <div className="flex justify-center">
            <a
              href="https://top-restaurantpage.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <Fade right>
                <div className="flex items-center justify-center mt-5">
                  <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none p-2 border-none bg-white hover:bg-violet-800 hover:ease-in-out rounded-full w-14">
                    <img src={link} alt="" />
                  </div>
                </div>
              </Fade>
            </a>
            <a
              href="https://github.com/StefanYves/TOP-RestaurantPage"
              target="_blank"
              rel="noreferrer"
            >
              <Fade right>
                <div className="flex items-center justify-center mt-5">
                  <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none p-2 border-none bg-white hover:bg-violet-800 hover:ease-in-out rounded-full w-14">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVR4nO2ZSWgVQRCGP2OCS3CJYoy7uCtiDi6o8aAIikvQi4oGvCiiRo2E6FXJQdxQg4LgUTx4cyPuHhVRD0bcsyDu4IJrTNTnSEMNPOfNm1czb2YSJD8UDNNT1fV3V1dX90AH/l8UAEuBfUAt8Bj4CLSKmOdH0ma+WQL0pp2gC1AGXAJ+A5ZPMToXgFViK3Z0AyqBVwGcTycvga1A17hILAAaQiTglHpgfpQEzNTXREjAKcdl5kNFf+BOjCQskVtAYVgkhst0W20kT8WHrNBP0qjVxtIAFAUl0bWNwsnyCLNAKfpoO3DecsjhICnWy+B2CbspwA7gWRbOmd1+G1As1cGBDN/P05LoptgnBruEoSH0A7gKVACzgNFAvsgYebcROAN8BTYDnR22ihWLXxVilYpRTLf75mlHy+PbAYr+zUB5oouy7Ah9o0pCkaL/F5lmpUwZ1+MiJFKi9GGll5FLSiPLIyRSrvThfDoDBT5K8eoIiRxT+vAL6OlmYKnSwGdZkFFhPPBT6Uupm4H9SmWT56PGSaUve92Ua5XK02Igskzpy1k35afKuMyNgchYJRFT0KbgvULRfBMHhiiJvHNTblUomm86xUBkoiMKPor8cfjT4qZsZ4rZUu+MAPoAA+XZljiIJCNXtoYC6dtUFYOSBjYFn6TxJnAXaJRQeiPPtqwgehz2iIrvScvAzFIKnkjjNUmxWyRPm4p1khw37VGJGjnS11BggmTKRVI575a7MPsIkIKL0rhLqsuDwCngOlAns/FBpnN1xLPRIqPdBDwAbgPngCNyFtrvVaZUKzOFkW8yU2FjncuC9pKdbkbm+jBgpBlYE1KomZJ8j08SRua4GeuuTMFOuSFryXnS0yBfBqMxQL8tXucie504xZxT1soGlM7wW+AEsEFGaiTQK8l2XznHmOvQKikvvgYgYImYkiotSj1SXomcwd8qw65KbihtFMq75iyct5JkYaa015RGsU7apwJfMpAwpNOhJAQy9eKLJyo8DJhcbpcQFyU07J84z4ErwOJMHQDrsyRSrr3duBckLn0gx6MPK4Pc9VOBzwQSLkYSIe4fGwKQSADT/XZ0JI2xT3KxNlgTpx4YFYBITZCO8qTu8tNRZ5/2/di+7PMC8B/09BnLfqG1+yCMP8DDgIdtSOS+nBhDQQ+pNOMmciWKf/F5UmInYiCSAA5FfdExWc4HURGpA2YQE3IlBTc4fvj7xeskfWNrU0zXTSnIkbLldFL54gelorswyz2pAx0gIvwFLXDNiM6zHVAAAAAASUVORK5CYII=" />
                  </div>
                </div>
              </Fade>
            </a>
          </div>
        </div>
      </div>
      <Contact />
      <section id="section4"></section>
      <ScrollToTop />
    </div>
  );
};

export default Home;
