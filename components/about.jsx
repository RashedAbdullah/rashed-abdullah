import { aboutMe } from "@/data/about-me";
import React from "react";
import Info from "./info";
import Description from "./description";

const About = ({ contactRef, lang }) => {
  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className=" bg-white p-5 lg:grid grid-cols-12 rounded-sm shadow gap-10 items-center"
    >
      <Info />
      <Description contactRef={contactRef} />
    </div>
  );
};

export default About;
