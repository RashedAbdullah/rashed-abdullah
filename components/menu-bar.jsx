import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { menuList } from "@/data/menu-list";
import { useState, useRef } from "react";

const MenuBar = ({
  refs: {
    homeRef,
    aboutRef,
    skillsRef,
    projectsRef,
    blogsRef,
    contactRef,
    scrollToSection,
  },
}) => {
  const [isHide, setIsHide] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsHide(!isHide);
  };

  return (
    <div
      className={`fixed z-50 right-0 top-0 flex transition duration-500 ${
        !isHide ? "translate-x-56" : ""
      } `}
    >
      <div className=" text-xl ">
        <button
          onClick={toggleMenu}
          className="bg-colors-quinary h-8 w-8 mt-1 flex justify-center items-center mr-2 text-white text-sm rounded-full hover:bg-white hover:text-colors-quinary transition duration-300"
        >
          {!isHide ? <FiMenu /> : <IoClose />}
        </button>
      </div>
      <div>
        <ul className="bg-colors-quinary text-white h-screen">
          {menuList.map((menu) => (
            <li key={menu}>
              <button
                onClick={() => {
                  // Scroll to the corresponding section based on the menu item clicked
                  switch (menu) {
                    case "Home":
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                      break;
                    case "About":
                      scrollToSection(aboutRef);
                      break;
                    case "Skills":
                      scrollToSection(skillsRef);
                      break;
                    case "Projects":
                      scrollToSection(projectsRef);
                      break;
                    case "Blogs":
                      scrollToSection(blogsRef);
                      break;
                    case "Contact":
                      scrollToSection(contactRef);
                      break;
                    default:
                      break;
                  }
                }}
                className="py-3 w-56 pl-10 hover:bg-blue-800 transition duration-300 text-start"
              >
                {menu}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
