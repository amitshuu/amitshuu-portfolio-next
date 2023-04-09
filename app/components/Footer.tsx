"use client";

import { nav_link } from "../constants/constants_links";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="py-12 body-font bg-primary-section">
      <div className="flex flex-col items-center justify-center gap-8">
        <ul className="flex gap-5 md:gap-10">
          {nav_link.map((links) => {
            return (
              <Link
                to={links.to}
                role="link"
                duration={500}
                smooth={true}
                className="text-lg text-white transition-colors duration-150 cursor-pointer hover:text-primary-blue "
                key={links.name}
              >
                {links.name}
              </Link>
            );
          })}
        </ul>
        <span className="text-center text-gray-400 text-md">
          {" "}
          Copyright © 2023, All Right Reserved
          {/* <a className='ml-1 text-gray-200 border-b-2 cursor-pointer border-primary-blue'>
            amitshuu
          </a> */}
        </span>
      </div>
    </footer>
  );
};
export default Footer;
