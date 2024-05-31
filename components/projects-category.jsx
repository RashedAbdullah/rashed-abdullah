import { projectsCategory } from "@/data/projects-category";

const ProjectCategory = ({ onSwitchCategory, projects }) => {
  const byCategory = Object.values(
    projects.reduce((acc, cur) => {
      if (!acc[cur.category]) {
        acc[cur.category] = cur;
      }
      return acc;
    }, {})
  );
  return (
    <div className="flex items-center justify-center">
      <ul className="lg:flex text-white w-full lg:w-auto">
        <li>
          <button
            onClick={() => onSwitchCategory("All")}
            className={`px-5 py-2 bg-colors-quinary hover:bg-blue-800 transition duration-300 w-full lg:w-auto`}
          >
            All
          </button>
        </li>
        {byCategory.map((project) => (
          <li key={project.category}>
            <button
              onClick={() => onSwitchCategory(project.category)}
              className={`px-5 py-2 bg-colors-quinary hover:bg-blue-800 transition duration-300 w-full lg:w-auto`}
            >
              {project.category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCategory;
