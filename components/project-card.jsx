import Image from "next/image";
import { TbLiveView } from "react-icons/tb";
import { DiGithubBadge } from "react-icons/di";
import { motion } from "framer-motion";

const ProjectCard = ({ project, lang }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-colors-dark_card shadow dark:shadow-gray-700 gap-2 lg:mb-0 mb-4 overflow-hidden p-1"
    >
      <a target="_blank" href={project.live} className="">
        <Image
          src={project.thumbnail}
          alt={project.title}
          height={800}
          width={1000}
          className="object-cover hover:scale-105 transition duration-300"
        />
      </a>
      <div className="mt-2 p-3 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="bg-colors-primary text-[15px] p-1 font-[100]">
            {project.category}
          </p>
          <div className="flex gap-2">
            <a
              target="_blank"
              href={project.live}
              className="h-25 w-25 text-white bg-colors-quinary rounded-full p-1 shadow-lg hover:bg-blue-800 transition duration-300"
            >
              <TbLiveView />
            </a>
            <a
              target="_blank"
              href={project.code}
              className="h-25 w-25 text-white bg-colors-quinary rounded-full p-1 shadow-lg hover:bg-blue-800 transition duration-300"
            >
              <DiGithubBadge />
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="font-[400] dark:text-white">{project.title}</h2>
          <div className="flex gap-2">
            {project.tools.map((tool) => (
              <p key={tool} className="  text-[15px] font-[100]">
                {tool}
              </p>
            ))}
          </div>
        </div>
        <div className="font-[200] dark:text-white dark:bg-gray-900 p-2 rounded ">
          <p>{project.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
