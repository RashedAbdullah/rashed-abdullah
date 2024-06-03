"use client";

import Projects from "@/components/projects";
import React from "react";

const ProjectPage = ({ params: { lang } }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="lg:w-[60vw] text-xs lg:text-sm m-5 flex flex-col gap-10">
        <Projects lang={lang} />
      </div>
    </div>
  );
};

export default ProjectPage;
