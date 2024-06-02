import { useEffect, useState } from "react";
import Title from "./title";
import ProjectCard from "./project-card";
import ProjectCategory from "./projects-category";
import { useLanguage } from "@/contexts/language-provider";
import { getProjects_ar, getProjects_bn, getProjects_en } from "@/actions";

const Projects = ({ lang }) => {
  const langs = useLanguage();
  const [allprojects, setallProjects] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data =
        (await lang) === "ar"
          ? await getProjects_ar()
          : lang === "bn"
          ? await getProjects_bn()
          : await getProjects_en();

      // setallProjects(data);
      console.log(data);
    };
    getData();
  }, [lang]);
  const handlePorejctCategory = (category) => {
    switch (category) {
      case "All":
        // revalidatePath("/");
        return allprojects;
      default:
        return setallProjects(
          allprojects.filter((project) => project.category === category)
        );
    }
  };

  return (
    <div>
      <Title>{langs.projects}</Title>
      <ProjectCategory
        onSwitchCategory={handlePorejctCategory}
        projects={allprojects}
      />
      <div className="lg:grid grid-cols-3 mt-10 gap-5">
        {allprojects.length ? (
          allprojects.map((project) => (
            <ProjectCard key={project.id} project={project} lang={lang} />
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
