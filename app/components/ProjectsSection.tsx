"use client";

import { projects_links } from "../constants/constants_links";
import { IProject } from "../constants/types";
import CustomCarousel from "./CustomCarousel";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import ProjectCard from "./ProjectCard";
import { Element } from "react-scroll";
import "react-multi-carousel/lib/styles.css";

const ProjectsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectDetails, setProjectDetails] = useState<IProject | null>(null);

  const handleModal = (projectInfo: IProject) => {
    setIsModalOpen(true);
    setProjectDetails(projectInfo);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setProjectDetails(null);
  };

  return (
    <>
      {isModalOpen ? (
        <ProjectModal
          isModalOpen={isModalOpen}
          projectDetails={projectDetails}
          closeModal={closeModal}
        />
      ) : null}
      <Element name="project-section">
        <section className="flex flex-col w-full px-4 py-20 text-gray-600 lg:px-8 body-font bg-primary-section">
          <div className="flex flex-col items-center justify-center">
            <p className="mb-6 text-4xl text-center text-white lg:text-7xl ">
              Recent <span className="text-primary-blue">Projects</span>
            </p>
            <p className="w-11/12 m-0 mb-0 text-2xl text-center text-gray-300 lg:w-2/4 ">
              In this section, you'll find some of the recent website projects
              I've been working on. Take a closer look and explore the various
              design styles, features, and functionalities that I can bring to
              your next website project.
            </p>
          </div>
          <div className="container flex items-center justify-center max-w-full py-16 xl:justify-center">
            <div className="relative z-40 w-full px-6 pb-10 -m-4 md:px-0 ">
              <CustomCarousel>
                {projects_links.map((project) => (
                  <ProjectCard
                    key={project.projectName}
                    project={project}
                    handleModal={handleModal}
                  />
                ))}
              </CustomCarousel>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
};

export default ProjectsSection;
