import Title from "./title";
import ProjectCard from "./project-card";
import { useLanguage } from "@/contexts/language-provider";
import { projects } from "@/data/projects";

const Projects = ({ lang }) => {
  const langs = useLanguage();

  return (
    <div>
      <Title>{langs.projects}</Title>

      <div className="lg:grid grid-cols-2 mt-10 gap-5">
        {projects ? (
          projects.map((project) => (
            <ProjectCard key={project.name} project={project} lang={lang} />
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
