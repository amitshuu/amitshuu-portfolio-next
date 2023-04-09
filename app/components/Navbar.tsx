"use client";

import { nav_link } from "../constants/constants_links";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MobileMenu from "./MobileMenu";
import { useMobile } from "../hooks/customHooks";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  useMobile(() => setOpenMobileNav(false));

  return (
    <>
      <MobileMenu
        setOpenMobileNav={setOpenMobileNav}
        openMobileNav={openMobileNav}
      />
      <nav
        className={`${
          openMobileNav ? "" : "sticky"
        } top-0 z-50 flex items-center md:static justify-between py-10 shadow-md bg-dark-bg section-center`}
      >
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
              <li>
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
