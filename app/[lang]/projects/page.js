"use client";

import Projects from "@/components/projects";
import React from "react";

const ProjectPage = ({ params: { lang } }) => {
  return (
    <div className="lg:mx-36">
      <Projects lang={lang} />
    </div>
  );
};

export default ProjectPage;
