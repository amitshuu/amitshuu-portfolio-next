"use client";

import shuki_hero_image from "../assets/shuki_hero_image.png";
import SocialLinks from "./SocialLinks";
import { Typewriter } from "react-simple-typewriter";
import { Link, Element } from "react-scroll";

const HeroSection = () => {
  return (
    <Element name="home">
      <section className="flex flex-col py-2 md:py-10 xl:flex-row section-center">
        <div className="relative z-10 flex flex-col flex-wrap items-center justify-center w-full pt-10 m-0 xl:items-start ">
          <p className="py-5 text-4xl text-white md:text-6xl">
            Hello, <span className="text-primary-blue">I'm</span>
          </p>
          <h1 className="pb-5 text-4xl text-white md:text-5xl xl:text-5xl">
            Amit Shukrun
          </h1>
          <h1 className="h-12 text-2xl text-center text-white lg:h-auto md:text-4xl xl:text-4xl xl:text-start">
            And I'm a{" "}
            <span className=" text-primary-blue">
              <Typewriter
                loop={false}
                cursor={true}
                words={["Fullstack Web Developer."]}
              />
            </span>
          </h1>
          <h3 className="py-6 text-xl text-center text-gray-300 md:text-2xl xl:text-start">
            Greetings! I'm Amit Shukrun, a Fullstack Web Developer. <br /> I'm
            thrilled to present my portfolio to you and I look forward <br /> to
            working with you on your next project.
          </h3>
          <div className="flex flex-col items-center xl:items-start ">
            <div className="flex flex-row mb-5">
              <button className="px-3 py-3 mr-5 text-lg text-black transition-all duration-100 rounded-lg cursor-pointer hover:bg-primary-blue-hover bg-primary-blue hover:transform hover:scale-105 hover:text-white ">
                <a href="/Amit_Shukrun_CV.pdf" download>
                  Download CV
                </a>
              </button>
              <button className="px-3 py-3 mr-5 text-lg text-black transition-all duration-100 rounded-lg cursor-pointer hover:bg-primary-blue-hover bg-primary-blue hover:transform hover:scale-105 hover:text-white ">
                <Link
                  to="contact-section"
                  role="link"
                  duration={500}
                  smooth={true}
                >
                  Let's talk
                </Link>
              </button>
            </div>
            <div className="flex justify-center w-full mb-6 xl:mb-0">
              <SocialLinks />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-10 ">
          <img
            className="max-w-xs xl:max-w-lg xl:block animate-up-down"
            src={shuki_hero_image.src}
            alt="amitshuu - fullstack web devleloper - avatar"
          />
        </div>
      </section>
    </Element>
  );
};

export default HeroSection;
