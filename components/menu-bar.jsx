import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-provider";
import LanguageSwitcher from "./lang-switcher";
import ThemeSwitcher from "./themeswitcher";

const MenuBar = ({
  refs: {
    aboutRef,
    skillsRef,
    projectsRef,
    blogsRef,
    contactRef,
    scrollToSection,
  },
}) => {
  const [isHide, setIsHide] = useState(false);

  const toggleMenu = () => {
    setIsHide(!isHide);
  };

  const langs = useLanguage();

  const handleMenu = (e) => {
    switch (e.target.innerText) {
      case langs.home:
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        break;
      case langs.about:
        scrollToSection(aboutRef);
        break;
      case langs.skills:
        scrollToSection(skillsRef);
        break;
      case langs.projects:
        scrollToSection(projectsRef);
        break;
      case langs.blogs:
        scrollToSection(blogsRef);
        break;
      case langs.contact:
        scrollToSection(contactRef);
        break;
      default:
        break;
    }
  };

  return (
    <div
      className={`fixed z-50 right-0 top-0 flex transition duration-500 ${
        !isHide ? "translate-x-56" : ""
      } `}
    >
      <div className=" text-xl ">
        <motion.button
          whileHover={{ scale: 1.2 }}
          onClick={toggleMenu}
          className="bg-colors-quinary h-8 w-8 mt-1 flex justify-center items-center mr-2 text-white text-sm rounded-full hover:bg-white hover:text-colors-quinary transition duration-300"
        >
          {!isHide ? <FiMenu /> : <IoClose />}
        </motion.button>
      </div>
      <div>
        <ul className="bg-colors-quinary text-white h-screen">
          <li>
            <button
              onClick={handleMenu}
              className="py-3 w-56 pl-10 hover:bg-blue-800 transition duration-300 text-start"
            >
              {langs.home}
            </button>
          </li>
          <li>
            <button
              onClick={handleMenu}
              className="py-3 w-56 pl-10 hover:bg-blue-800 transition duration-300 text-start"
            >
              {langs.about}
            </button>
          </li>
          <li>
            <button
              onClick={handleMenu}
              className="py-3 w-56 pl-10 hover:bg-blue-800 transition duration-300 text-start"
            >
              {langs.skills}
            </button>
          </li>
          <li>
            <button
              onClick={handleMenu}
              className="py-3 w-56 pl-10 hover:bg-blue-800 transition duration-300 text-start"
            >
              {langs.projects}
            </button>
          </li>
          <li>
            <button
              onClick={handleMenu}
              className="py-3 w-56 pl-10 hover:bg-blue-800 transition duration-300 text-start"
            >
              {langs.blogs}
            </button>
          </li>
          <li>
            <button
              onClick={handleMenu}
              className="py-3 w-56 pl-10 hover:bg-blue-800 transition duration-300 text-start"
            >
              {langs.contact}
            </button>
          </li>
          <li><div className="h-[1px] my-5 bg-white"></div></li>
          <li>
            <ThemeSwitcher />
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
