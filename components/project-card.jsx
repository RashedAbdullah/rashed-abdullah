import Image from "next/image";
import { TbLiveView } from "react-icons/tb";
import { DiGithubBadge } from "react-icons/di";
import { motion } from "framer-motion";
import Link from "next/link";

const ProjectCard = ({ project, lang }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-colors-dark_card shadow dark:shadow-gray-700 gap-2 lg:mb-0 mb-4 overflow-hidden p-2 rounded"
    >
      <a target="_blank" href={project.url}>
        <Image
          src={`https://github-readme-stats.vercel.app/api/pin/?username=RashedAbdullah&repo=${project.name}&theme=transparent`}
          alt="Github Repository"
          height={700}
          width={600}
        />
      </a>
    </motion.div>
  );
};

export default ProjectCard;
