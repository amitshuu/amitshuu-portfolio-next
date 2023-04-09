"use client";

import React, { useState } from "react";
import { testimonials_links as testimonials } from "../constants/constants_links";
import { TbGuitarPickFilled } from "react-icons/tb";
import TestimoialsCarousel from "./TestimoialsCarousel";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handleNextButton = () => {
    return index === testimonials.length - 1
      ? setIndex(0)
      : setIndex((prevState) => prevState + 1);
  };

  const handlePrevButton = () => {
    return index === 0
      ? setIndex(testimonials.length - 1)
      : setIndex((prevState) => prevState - 1);
  };

  return (
    <section className="flex flex-col items-center justify-center w-full py-20 overflow-hidden lg:px-20 bg-primary-section">
      <div className="flex flex-col justify-between w-full xl:px-16 lg:flex-row">
        <div className="block">
          <h3 className="mb-4 text-2xl text-center uppercase md:mb-8 lg:text-start lg:text-4xl text-primary-blue">
            Testimonials
          </h3>
          <h2 className="mb-0 text-4xl text-center text-white md:mb-12 lg:text-start lg:text-6xl">
            What Client Say
          </h2>
        </div>
        <div className="items-center justify-center hidden gap-10 px-10 md:flex">
          <div className="flex items-center justify-center">
            <TbGuitarPickFilled
              size={100}
              onClick={handlePrevButton}
              className="relative transition-all duration-150 rotate-90 cursor-pointer text-dark-bg text-7xl text-opacity-70 hover:text-opacity-100"
            />
            <span className="absolute text-3xl pointer-events-none text-primary-blue">
              {"<"}
            </span>
          </div>
          <div className="flex items-center justify-center">
            <TbGuitarPickFilled
              size={100}
              onClick={handleNextButton}
              className="relative rotate-[-90deg] text-7xl  text-dark-bg text-opacity-70 hover:text-opacity-100 transition-all duration-150 cursor-pointer"
            />
            <span className="absolute text-3xl pointer-events-none text-primary-blue">
              {">"}
            </span>
          </div>
        </div>
      </div>
      <TestimoialsCarousel
        currIndex={index}
        setCurrIndex={setIndex}
        handleNextButton={handleNextButton}
        handlePrevButton={handlePrevButton}
      />
    </section>
  );
};

export default Testimonials;
