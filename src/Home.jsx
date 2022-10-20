/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import GlobalStyles from "./styles/globalStyles";
import HomeStyle from "./styles/HomeStyle";
import {
  FiSun,
  FiMoon,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiGithub,
} from "react-icons/fi";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaFigma,
  SiJavascript,
} from "react-icons/all";
import Button from "./components/Button";
import Skill from "./components/Skill";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [icon, setIcon] = useState(<FiSun />);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
    if (isLightTheme) {
      setIcon(<FiSun />);
    } else {
      setIcon(<FiMoon />);
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <HomeStyle>
        <div className="container">
          <GlobalStyles />
          <nav>
            <div className="navbar">
              <h2>
                Francisco<span className="titleSecondary">.DEV</span>
                <button className="buttonTheme" onClick={toggleTheme}>
                  {icon}
                </button>
              </h2>
              <a href="/projects">Projetos</a>
            </div>
          </nav>

          <header id="header" className="limitWidth">
            <div className="containerTitle">
              <h1>Francisco Gabriel</h1>
              <h2>Dev Front-End Jr</h2>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, quod itaque aut ducimus fugit maxime numquam minus
                quos nesciunt ab molestiae.
              </p>
              <div className="containerButtons">
                <AnchorLink href="#about" className="buttonLink">
                  Mais sobre mim
                </AnchorLink>
                <Button className="button">Baixar currículo</Button>
              </div>
            </div>
            <img src="https://github.com/Chaicoo.png" />
          </header>

          <main>
            <div className="about limitWidth" id="about">
              <h2 className="title" data-aos="zoom-in">
                Sobre mim
              </h2>
              <div className="aboutContent" data-aos="zoom-in">
                <p className="text">
                  Tenho 20 anos, e estudo tecnologia desde os 15, quando
                  ingressei num Instituo Federal, onde fiz um curso técnico em
                  redes de computadores e resolvi seguir a carreia de DEV,
                  atualmente faço o curso de Bacharel em Ciência da Computação.
                </p>
                <p>
                  Sou apaixonado por tecnologia e programação, sempre buscando
                  aprender mais e mais. Atualmente estou estudando ReactJS e me
                  especializando no desenvovimento Front-end.
                </p>
              </div>
            </div>

            <div className="skills" id="skills">
              <h2 className="title" data-aos="fade-up">
                Conhecimentos
              </h2>
              <div className="containerSkills" data-aos="zoom-out">
                <Skill icon={<FaHtml5 />} title="HTML" />
                <Skill icon={<FaCss3 />} title="CSS" />
                <Skill icon={<SiJavascript />} title="JavaScript" />
                <Skill icon={<FaReact />} title="ReactJS" />
                <Skill icon={<FaFigma />} title="Figma" />
              </div>
            </div>

            <div className="projects" id="projects">
              <h2 className="title" data-aos="fade-up">
                Projetos
              </h2>
              <div className="containerProjects" data-aos="zoom-in"></div>
            </div>
          </main>
          <footer>
            {/*<ul className="linksOnpage">
              <li>
                <AnchorLink href="#root">Início</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#about">Sobre</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#skills">Conhecimentos</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#projects">Projetos</AnchorLink>
              </li>
            </ul>*/}

            <div className="socialMedia">
              <a
                href="https://www.linkedin.com/in/francisco-gab/"
                target="_blank"
              >
                <FiLinkedin />
              </a>
              <a href="https://www.instagram.com/_____chicoo/" target="_blank">
                <FiInstagram />
              </a>
              <a href="https://github.com/Chaicoo" target="_blank">
                <FiGithub />
              </a>
              <a href="mailto:gabriellima27@gmail.com" target="_blank">
                <FiMail />
              </a>
            </div>
            <p className="copyRight">
              © 2022 Francisco Gabriel. Todos os direitos reservados.
            </p>
          </footer>
        </div>
      </HomeStyle>
    </ThemeProvider>
  );
}

export default Home;
