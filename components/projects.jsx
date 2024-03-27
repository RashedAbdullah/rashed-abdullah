import React, { useState } from "react";
import Title from "./title";
import { projectsCategory } from "@/data/projects-category";

import { projects } from "@/data/projects";
import ProjectCard from "./project-card";

const Projects = () => {
  const [allprojects, setallProjects] = useState(projects);
  const handlePorejctCategory = (category) => {
    switch (category) {
      case "All":
        return setallProjects(projects);
      default:
        return setallProjects(
          projects.filter((project) => project.category === category)
        );
    }
  };
  return (
    <div>
      <Title>Projects</Title>
      <div className="flex items-center justify-center">
        <ul className="lg:flex text-white w-full lg:w-auto">
          {projectsCategory.map((type) => (
            <li key={type} className="">
              <button
                onClick={() => handlePorejctCategory(type)}
                className="px-5 py-2 bg-colors-quinary hover:bg-blue-800 transition duration-300 w-full lg:w-auto"
              >
                {type}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:grid grid-cols-3 mt-10 gap-5">
        {allprojects.length ? (
          allprojects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="col-span-3 text-center font-[100] text-2xl my-20 text-gray-400">
            <h3>No Projects Found</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
