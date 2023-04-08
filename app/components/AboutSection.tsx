"use client";
import about from "../assets/about_me_image2.png";
import { Element } from "react-scroll";

const AboutSection = () => {
  return (
    <>
      <Element name="about-section">
        <section className="flex items-center justify-between w-full py-24 mt-20 md:py-10 bg-primary-section section-center ">
          <div className="flex items-center justify-between ">
            <div className="flex">
              <img
                className="hidden max-w-xl 2xl:block"
                src={about.src}
                alt={"amitshuu - fullstack web developer - about me"}
              />
            </div>
            <div className="flex flex-col items-center ">
              <p className="py-4 text-5xl text-white lg:text-7xl ">
                About <span className="text-primary-blue">Me</span>
              </p>
              <p className="hidden mb-5 text-xl font-normal leading-loose text-center text-gray-300 md:block md:text-xl xl:w-3/4">
                Hi, my name is Amit, and I'm a 23-year-old full-stack web
                developer with expertise in both front-end and back-end
                development. I specialize in a range of technologies, including
                JavaScript, TypeScript, React, Node.js, REST Api, GraphQL and
                MongoDB, and I'm always eager to learn more. When I'm not
                working on web development projects, I enjoy surfing and hitting
                the gym to stay active and healthy. I'm passionate about
                building user-friendly web applications and love collaborating
                with others to bring ideas to life. Whether I'm designing a
                sleek front-end interface or working on complex back-end
                functionality, I'm always striving to deliver high-quality
                results.
              </p>
              <p className="block text-lg font-normal leading-normal text-center text-gray-300 md:hidden xl:w-3/4">
                I'm Amit, a 23-year-old full-stack web developer with expertise
                in front-end and back-end development. I'm skilled in
                JavaScript, React, Node.js, and MongoDB, among other
                technologies. I enjoy building user-friendly web applications
                and collaborating with others to bring ideas to life. When I'm
                not coding, I like to surf and hit the gym.
              </p>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
};

export default AboutSection;
