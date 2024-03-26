import Image from "next/image";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Profile = () => {
  return (
    <div className="relative">
      <Image
        src={"/profile.jpg"}
        height={150}
        width={150}
        alt="Profile"
        className="rounded-full absolute left-[50%] translate-x-[-50%] lg:-top-36 lg:h-32 lg:w-32 h-20 w-20 -top-[150px] shadow-lg"
      />
      <div className="mt-20 flex flex-col items-center gap-2">
        <h2 className="lg:text-4xl text-2xl text-colors-quaternary font-thin">
          Rashed Abdullah
        </h2>
        <h3 className="text-black font-[300] text-[18px]">
          Front-end Developer
        </h3>
        <ul className="flex gap-4">
          <li className=" flex items-center justify-center">
            <a
              target="_blank"
              href="https://github.com/RashedAbdullah"
              className="bg-colors-quinary p-2  rounded-full shadow-lg"
            >
              <BsGithub color="white" />
            </a>
          </li>
          <li className=" flex items-center justify-center">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/rashed4abdullah"
              className="bg-colors-quinary p-2  rounded-full shadow-lg"
            >
              <FiLinkedin color="white" />
            </a>
          </li>
          <li className=" flex items-center justify-center">
            <a
              target="_blank"
              href="https://github.com/RashedAbdullah"
              className="bg-colors-quinary p-2  rounded-full shadow-lg"
            >
              <FaFacebook color="white" />
            </a>
          </li>
          <li className=" flex items-center justify-center">
            <a
              target="_blank"
              href="https://www.instagram.com/rashed4abdullah"
              className="bg-colors-quinary p-2  rounded-full shadow-lg"
            >
              <AiFillInstagram color="white" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
