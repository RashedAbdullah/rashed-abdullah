"use client";
import { FiMenu } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { menuList } from "@/data/menu-list";
import { useState } from "react";

const MenuBar = () => {
  const [isHide, setIsHide] = useState(false);
  return (
    <div
      className={`fixed z-50 right-0 top-0 flex transition duration-500 ${
        !isHide ? "translate-x-52" : ""
      } `}
    >
      <div className=" text-xl ">
        <button
          onClick={() => setIsHide(!isHide)}
          className="bg-colors-quinary h-8 w-8 flex justify-center items-center mr-2 text-white text-sm rounded-full hover:bg-white hover:text-colors-quinary transition duration-300"
        >
          {!isHide ? <FiMenu /> : <AiOutlineCloseCircle />}
        </button>
      </div>
      <div>
        <ul className="bg-colors-quinary text-white h-screen">
          {menuList.map((menu) => (
            <li key={menu}>
              <button className="py-3 pr-32 px-5 hover:bg-blue-800 transition duration-300 w-full">
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
