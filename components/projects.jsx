import { useState } from "react";
import Title from "./title";
import { projects } from "@/data/projects";
import ProjectCard from "./project-card";
import ProjectCategory from "./projects-category";
import { useLanguage } from "@/contexts/language-provider";

const Projects = ({ lang }) => {
  const langs = useLanguage();
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
      <Title>{langs.projects}</Title>
      <ProjectCategory onSwitchCategory={handlePorejctCategory} />
      <div className="lg:grid grid-cols-3 mt-10 gap-5">
        {allprojects.length ? (
          allprojects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="col-span-3 text-center font-[100] text-2xl my-20 text-gray-400">
            <h3>{langs.noProject}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
