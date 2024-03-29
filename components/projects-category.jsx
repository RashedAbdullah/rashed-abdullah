import { projectsCategory } from "@/data/projects-category";

const ProjectCategory = ({ onSwitchCategory }) => {
  return (
    <div className="flex items-center justify-center">
      <ul className="lg:flex text-white w-full lg:w-auto">
        {projectsCategory.map((type) => (
          <li key={type} className="">
            <button
              onClick={() => onSwitchCategory(type)}
              className={`px-5 py-2 bg-colors-quinary hover:bg-blue-800 transition duration-300 w-full lg:w-auto ${
                type ? "border-b-4 border-white" : ""
              }`}
            >
              {type}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCategory;
