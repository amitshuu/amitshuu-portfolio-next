import React from "react";
import { testimonials_links as testimonials } from "../constants/constants_links";
import Image from "next/image";

type Props = {
  handleNextButton: VoidFunction;
  handlePrevButton: VoidFunction;
  currIndex: number;
  setCurrIndex: React.Dispatch<React.SetStateAction<number>>;
};

const TestimoialsCarousel = ({
  handleNextButton,
  handlePrevButton,
  currIndex,
  setCurrIndex,
}: Props) => {
  return (
    <div className="relative max-w-md overflow-hidden md:max-w-2xl">
      <div
        className="flex transition-transform duration-500 ease-in-out rtl"
        style={{ transform: `translateX(-${currIndex * 100}%)` }}
      >
        {testimonials.map((item) => {
          return (
            <article
              key={item.description}
              className="flex flex-col items-center justify-center flex-shrink-0 w-full px-10 mt-12 rounded-lg md:mt-10 md:p-10 overflow-none md:bg-dark-bg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-8 h-8 mb-8 text-primary-blue"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed text-center text-white text-md lg:text-xl">
                {item.description}
              </p>
              <span className="inline-block w-10 h-1 mt-8 mb-6 rounded bg-primary-blue"></span>
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <p className="font-medium tracking-wider text-white uppercase text-md title-font">
                    {item.clientName}
                  </p>
                  <p className="mb-3 text-center text-gray-500 uppercase text-md">
                    {item.clientBuisness}
                  </p>
                  <Image
                    src={item.clientImage}
                    className="w-10 h-10 rounded-full"
                    alt="client icon"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <div className="absolute top-0 left-0 right-0 flex justify-between p-10 md:hidden bottom-20">
        <button
          onClick={handlePrevButton}
          className="text-xl rounded-full shadow text-black/80 w-11 h-11 bg-white/50 "
        >
          {"<"}
        </button>
        <button
          onClick={handleNextButton}
          className="text-xl rounded-full text-black/80 w-11 h-11 bg-white/50 "
        >
          {">"}
        </button>
      </div>
      <div className="flex items-center justify-center gap-2 text-center ">
        {testimonials.map((t, i) => {
          return (
            <span
              onClick={() => setCurrIndex(i)}
              key={t.clientName}
              className={`inline-block w-3 h-3 mt-8 rounded-full transition-all duration-500 ease-out ${
                currIndex === i
                  ? "bg-primary-blue bg-opacity-100 "
                  : "bg-gray-300 bg-opacity-25 cursor-pointer"
              }`}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default TestimoialsCarousel;
