import React from "react";
import { IProject } from "../constants/types";

type Props = {
  project: IProject;
  handleModal: (projectInfo: IProject) => void;
};

const ProjectCard = ({ project, handleModal }: Props) => {
  const projectCategorySplitted = project.projectCategory.split(" ")[0];
  return (
    <article
      onClick={() => handleModal(project)}
      className="max-w-full px-2 transition-transform cursor-pointer md:px-8 hover:transform hover:scale-105"
    >
      <div className="block w-full h-full max-w-md overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
        <img
          className="w-full h-48 lg:h-56 md:h-36"
          src={project.projectImage.src}
          alt="project img"
        />
        <div className="h-full bg-dark-bg">
          <div className="px-5 py-3 md:p-6 ">
            <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 uppercase title-font">
              {projectCategorySplitted}
            </h2>
            <h1 className="inline-block mb-3 text-xl font-medium text-white border-b-2 title-font border-primary-blue">
              {project.projectName}
            </h1>
            <p className="w-full mb-3 text-lg leading-relaxed text-gray-300 md:mb-5 text-elipse-custom md:max-h-20">
              {project.projectDesc}
            </p>
            <div className="flex flex-wrap items-center flex-grow w-full h-full ">
              <p className="inline-flex items-center text-lg transition-colors duration-200 ease-in-out cursor-pointer text-primary-blue md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
