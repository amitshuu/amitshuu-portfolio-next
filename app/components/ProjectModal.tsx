"use client";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { IProject } from "../constants/types";
import ProjectLinks from "./ProjectLinks";

interface IProps {
  isModalOpen: boolean;
  projectDetails: IProject | null;
  closeModal: VoidFunction;
}
const ProjectModal = ({ isModalOpen, projectDetails, closeModal }: IProps) => {
  const [mainImage, setMainImage] = useState(projectDetails?.projectImage);

  const modalRef = useRef<HTMLDivElement>(null);

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  }
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);
  return (
    <div className="fixed inset-0 z-50 w-full h-screen ">
      <div className="z-50 flex items-center justify-center ">
        <div
          onClick={handleClick}
          className="fixed inset-0 flex items-center justify-center opacity-100 bg-primary-section"
        >
          <div
            className="container z-50 h-full max-w-2xl p-8 overflow-auto lg:max-w-5xl lg:h-auto bg-dark-bg"
            ref={modalRef}
          >
            <header className="flex justify-between w-full border-b-2 border-gray-400">
              <p className="text-4xl text-white">Project Details</p>
              <AiOutlineClose
                onClick={closeModal}
                className="text-3xl text-red-500 cursor-pointer hover:text-red-400"
              />
            </header>
            <section className="flex flex-col items-center justify-center w-full py-8 lg:gap-10 lg:flex-row ">
              <div className="flex flex-col w-full lg:w-2/4 ">
                <img
                  src={mainImage?.src}
                  className="w-full mb-6 rounded-md h-72"
                  alt={projectDetails?.projectName}
                />
                <div className="flex justify-between w-full mb-10 lg:mb-0 ">
                  {projectDetails?.projectSubImages?.map((image) => {
                    return (
                      <img
                        src={image.src}
                        className={` cursor-pointer object-cover w-1/6 rounded-md h-14 ${
                          image === mainImage
                            ? "border-2 border-primary-blue"
                            : null
                        }`}
                        alt="project gallery"
                        onClick={() => setMainImage(image)}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="w-full lg:w-2/4">
                <p className="inline-block mb-4 text-4xl text-white border-b-4 border-primary-blue">
                  {projectDetails?.projectName}
                </p>
                <p className="mb-6 text-lg text-gray-300">
                  {projectDetails?.projectDesc}
                </p>
                <div className="border-b-2 border-gray-500 text-start">
                  <div className="grid w-full grid-cols-3 mb-4 text-white whitespace-nowrap">
                    Category:
                    <span className="">{projectDetails?.projectCategory}</span>
                  </div>
                  <div className="grid items-center w-full grid-cols-3 mb-5 text-white whitespace-nowrap">
                    Useful Links:
                    <span className="flex">
                      <div className="flex items-center">
                        {projectDetails?.usefulLinks && (
                          <ProjectLinks links={projectDetails.usefulLinks} />
                        )}
                      </div>
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full mt-6">
                  <p className="text-white text-md">Feel free to contact me!</p>
                  <button className="px-6 py-2 text-black transition-all duration-100 rounded-lg hover:text-white xl:px-8 hover:bg-primary-blue-hover bg-primary-blue hover:transform">
                    <Link
                      to="contact-section"
                      smooth={true}
                      duration={500}
                      onClick={closeModal}
                      className=""
                    >
                      Lets Talk
                    </Link>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
