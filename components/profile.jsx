import Image from "next/image";
import React from "react";
import SocilaLinks from "./social-links";
import Link from "next/link";
import profileImage from "@/public/profile.jpg";
import { getManageLangs } from "@/manage-langs/manage-langs";

const Profile = async ({ lang }) => {
  const langs = await getManageLangs(lang);

  return (
    <div className="">
      <Link href="/">
        <Image
          placeholder="blur"
          src={profileImage}
          height={150}
          width={150}
          alt="Profile image"
          className="rounded-full absolute left-[50%] translate-x-[-50%] translate-y-[-50%]  lg:h-32 lg:w-32 h-20 w-20  shadow-lg"
        />
      </Link>
      <div className="flex flex-col items-center gap-2 lg:pt-20 pt-12">
        <h2 className="lg:text-4xl text-2xl text-colors-quaternary font-thin dark:text-white">
          {langs.name}
        </h2>
        <h3 className="text-gray-600 font-[300] text-[18px] dark:text-white">
          {langs.profession}
        </h3>
        <SocilaLinks />
      </div>
    </div>
  );
};

export default Profile;
