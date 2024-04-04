/* eslint-disable react/no-unescaped-entities */
import { aboutMe } from "@/data/about-me";
import React from "react";

const Description = ({ contactRef }) => {
  return (
    <div className="col-span-7 py-6 lg:py-0 text-colors-tertiary flex flex-col gap-2">
      <p>{aboutMe.desc1}</p>
      <p className="mt-2">{aboutMe.desc2}</p>
      <div className="flex gap-3 flex-col lg:flex-row">
        <a
          href="../resume/RashedResume.pdf"
          download="RashedResume.pdf"
          className="bg-colors-quinary text-white py-2 px-5 hover:bg-blue-800 transition"
        >
          Download CV
        </a>

        <button
          onClick={() =>
            contactRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-colors-primary text-colors-quaternar py-2 px-5 hover:text-black transition"
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Description;
