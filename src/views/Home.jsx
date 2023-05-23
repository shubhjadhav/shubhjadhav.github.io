import React, { useContext } from "react";
import light from "../assets/light.jpg";
import dark from "../assets/dark.jpg";
// import heroBg from "../assets/analyst.jpg";
import Typical from "react-typical";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
// import { Link } from "react-scroll";
import cloud from "../assets/cloudBg.png";
import cloudDark from "../assets/cloudDark.png";
import Resume from "../assets/Shubham-Jadhav-Resume.pdf";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
        style={
          darkMode
            ? { background: "#FFFFFF", backgroundSize: "cover" }
            : { background: "#000000", backgroundSize: "cover" } 
            // ? { backgroundImage: `url('${cloud}')`, backgroundSize: "cover" }
            // : { backgroundImage: `url('${cloudDark}'`, backgroundSize: "cover" }
        }
      >
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <motion.span
                className={darkMode ? "block text-black" : " text-white"}
              >
                Hi, I am Shubham
              </motion.span>
              <span className="block text-blue-500 z-0 lg:inline">
                <Typical
                  steps={[
                    "Data Scientist",
                    1000,
                    "Data Analyst",
                    1000,
                    "Business Analyst",
                    1000,
                  ]}
                  loop={Infinity}
                />
              </span>
            </h1>
            <p
              className={
                darkMode
                  ? "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  : "mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              }
            >
              I am a passionate data guy. I am currently a graduate computer science student at George Washington University.
            </p>
            <div className="flex md:justify-start ">
              {contactLinks.map((el) => (
                <a
                  href={el.link}
                  target='_blank'
                  className="mr-5 cursor-pointer mt-8 hover:scale-125"
                >
                  <img alt="" src={el.url} />
                  {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
                </a>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10" href={Resume} download="Shubham_Jadhav_Resume" target="_blank" rel="noreferrer">
                  Resume
                </a>
              </div>
            </div>
          </div>
          <motion.img
            initial="hidden"
            whileInView={"visible"}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                },
              },
              hidden: { opacity: 1, y: 80 },
            }}
            src={darkMode ? light : dark}
            alt=""
            className="md:w-3/6 hidden sm:block"
          />
        </main>
      </div>
    </>
  );
};

export default Home;
