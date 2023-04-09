import React from "react";
import { skills } from "../constants/skills_links";

const SkillsSection = () => {
  return (
    <section className="flex items-center justify-center px-4 py-20 md:px-8 bg-dark-bg">
      <div className="container flex flex-col items-center justify-center">
        <p className="mb-6 text-4xl text-white md:text-7xl">
          Technology
          <span className=" text-primary-blue"> Stack</span>
        </p>
        <p className="max-w-3xl m-0 mb-6 text-xl text-center text-gray-300 md:text-2xl">
          My technology stack is built on the latest tools and platforms,
          including React for dynamic web applications, Express for server-side
          development, MongoDB for efficient data storage, and Shopify for
          seamless e-commerce integration. With this powerful combination, we
          deliver innovative solutions that drive growth and enhance user
          experiences.
        </p>
        <article className="flex flex-wrap items-center justify-center max-w-sm gap-10 py-10 md:max-w-4xl ">
          {skills.map((skill) => {
            return (
              <div
                key={skill.title}
                className="flex flex-col items-center justify-center "
              >
                <img
                  className="mb-3 w-14 h-14 md:w-20 md:h-20"
                  src={skill.icon.src}
                  alt="amitshuu - web developer - skill icon"
                />
                <span className="inline-block w-10 h-1 mb-4 text-center rounded bg-primary-blue"></span>

                <p className="font-medium tracking-wider text-center text-white uppercase text-md title-font">
                  {skill.title}
                </p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default SkillsSection;
