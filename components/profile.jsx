import Image from "next/image";
import React from "react";
import { FiLinkedin } from "react-icons/fi";
const Profile = () => {
  return (
    <div className="relative">
      <Image
        src={"/profile.jpg"}
        height={150}
        width={150}
        alt="Profile"
        className="rounded-full absolute left-[50%] translate-x-[-50%] lg:-top-36 lg:h-32 lg:w-32 h-20 w-20 -top-[150px]"
      />
      <div className="mt-20 flex flex-col items-center gap-1">
        <h2 className="lg:text-4xl text-2xl text-colors-quaternary font-thin">
          Rashed Abdullah
        </h2>
        <h3 className="text-black font-[300] text-[18px]">
          Front-end Developer
        </h3>
        <ul className="flex gap-4">
          <li>
            <a target="_blank" href="" className="">
              Github
            </a>
          </li>
          <li>
            <a target="_blank" href="" className="">
              Linkedin
            </a>
          </li>
          <li>
            <a target="_blank" href="">
              Facebook
            </a>
          </li>
          <li>
            <a target="_blank" href="">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
