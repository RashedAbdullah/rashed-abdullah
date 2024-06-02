import { getBlogById_en, getProjects_en, getSkills_en } from "@/actions";
import { getManageLangs } from "@/manage-langs/manage-langs";
import React from "react";

const Footer = async ({ lang }) => {
  const langs = await getManageLangs(lang);

  return (
    <div dir={lang === "ar" ? "rtl" : undefined}>
      <p className="text-center font-[100] text-sm my-10 dark:text-gray-300">
        &copy; {langs.allright}
      </p>
    </div>
  );
};

export default Footer;
