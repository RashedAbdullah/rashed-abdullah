import React from "react";
import Title from "./title";
import { projectsCategory } from "@/data/projects-category";

import { projects } from "@/data/projects";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <div>
      <Title>Projects</Title>
      <div className="flex items-center justify-center">
        <ul className="lg:flex text-white w-full lg:w-auto">
          {projectsCategory.map((type) => (
            <li key={type} className="">
              <a
                href=""
                className="px-5 py-2 bg-colors-quinary hover:bg-blue-800 transition duration-300 block"
              >
                {type}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:grid grid-cols-3 mt-10 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
