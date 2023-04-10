"use client";

import { useEffect, useState } from "react";
import { useMobile, usePageScroll } from "../hooks/customHooks";
import MobileMenu from "./MobileMenu";
import { AiOutlineMenu } from "react-icons/ai";
import { nav_link } from "../constants/constants_links";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  useMobile(() => setOpenMobileNav(false));

  const visible = usePageScroll();

  const navClass = `${
    openMobileNav ? "" : visible ? "sticky opacity-100" : "opacity-0"
  } top-0 z-50 w-full flex items-center justify-between py-10 shadow-md bg-dark-bg section-center transition duration-300`;

  return (
    <>
      <MobileMenu
        setOpenMobileNav={setOpenMobileNav}
        openMobileNav={openMobileNav}
      />
      <nav className={navClass}>
        <div className="flex justify-between w-full px-4 lg:px-0 ">
          <p className="text-4xl text-white">amitshuu</p>
          <AiOutlineMenu
            onClick={() => setOpenMobileNav(true)}
            className="flex text-4xl cursor-pointer md:hidden text-primary-blue hover:text-primary-blue-hover"
          />
        </div>
        <ul className="hidden px-10 text-xl cursor-pointer md:flex">
          {nav_link.map((navLink) => {
            return (
              <li key={navLink.name}>
                <Link
                  to={navLink.to}
                  duration={500}
                  role="link"
                  smooth={true}
                  className={`hover:text-primary-blue px-5 ${
                    navLink.name === "Home" ? "text-primary-blue" : "text-white"
                  }`}
                  key={navLink.name}
                >
                  {navLink.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
