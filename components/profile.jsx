import Image from "next/image";
import React from "react";
import SocilaLinks from "./socialLinks";

const Profile = () => {
  return (
    <div className="">
      <Image
        src={"/profile.jpg"}
        height={150}
        width={150}
        alt="Profile"
        className="rounded-full absolute left-[50%] translate-x-[-50%] translate-y-[-50%]  lg:h-32 lg:w-32 h-20 w-20  shadow-lg"
      />
      <div className="flex flex-col items-center gap-2 lg:pt-20 pt-12">
        <h2 className="lg:text-4xl text-2xl text-colors-quaternary font-thin">
          Rashed Abdullah
        </h2>
        <h3 className="text-black font-[300] text-[18px]">
          Front-end Developer
        </h3>
        <SocilaLinks />
      </div>
    </div>
  );
};

export default Profile;
