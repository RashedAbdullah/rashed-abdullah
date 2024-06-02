/* eslint-disable react/no-unescaped-entities */
import { useLanguage } from "@/contexts/language-provider";

import React from "react";

const Description = ({ contactRef }) => {
  const langs = useLanguage();
  return (
    <div className="col-span-7 py-6 lg:py-0 text-colors-tertiary dark:text-white flex flex-col gap-2">
      <p className="whitespace-pre-wrap">{langs.desc}</p>

      <div className="flex gap-3 flex-col lg:flex-row">
        <a
          href="/RashedResume.pdf"
          download="RashedResume.pdf"
          className="bg-colors-quinary text-white py-2 px-5 hover:bg-blue-800 transition"
        >
          {langs.donwloadcv}
        </a>

        <button
          onClick={() =>
            contactRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-colors-primary text-colors-quaternar dark:text-black py-2 px-5 hover:text-black transition"
        >
          {langs.contactme}
        </button>
      </div>
    </div>
  );
};

export default Description;
