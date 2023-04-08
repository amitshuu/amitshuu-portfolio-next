import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { nav_link } from "../constants/constants_links";
import SocialLinks from "./SocialLinks";
import { Link } from "react-scroll";

type Props = {
  setOpenMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
  openMobileNav: boolean;
};
const MobileMenu = ({ setOpenMobileNav, openMobileNav }: Props) => {
  const menuTranslateX = openMobileNav ? "0%" : "100%";

  useEffect(() => {
    if (openMobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMobileNav]);

  return (
    <aside
      className={`fixed flex top-0 left-0 w-full h-full z-50 md:hidden  flex-col gap-20 px-8  overflow-hidden bg-dark-bg transition-all duration-500 `}
      style={{ transform: `translateX(${menuTranslateX})` }}
    >
      <div className="flex items-center justify-between w-full py-10 shadow-md ">
        <p className="text-4xl text-white ">amitshuu</p>{" "}
        <AiOutlineClose
          onClick={() => setOpenMobileNav(false)}
          className="flex text-4xl text-red-500 cursor-pointer md:hidden hover:text-red-400"
        />
      </div>
      <nav>
        <ul className="flex flex-col items-center justify-center w-full py-6 shadow-md bg-primary-section">
          {nav_link.map((navLink) => {
            return (
              <li className="my-4" key={navLink.name}>
                <Link
                  to={navLink.to}
                  duration={500}
                  smooth={true}
                  onClick={() => setOpenMobileNav(false)}
                  className="text-xl text-white duration-150 cursor-pointer hover:text-primary-blue"
                >
                  {navLink.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <SocialLinks />
    </aside>
  );
};

export default MobileMenu;
