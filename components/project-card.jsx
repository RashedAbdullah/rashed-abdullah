import Image from "next/image";
import Link from "next/link";
import { TbLiveView } from "react-icons/tb";
import { DiGithubBadge } from "react-icons/di";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow gap-2 lg:mb-0 mb-4 overflow-hidden">
      <Link href="" className="">
        {" "}
        <Image
          src={`/${project.img}`}
          alt=""
          height={800}
          width={1000}
          className="object-cover hover:scale-105 transition duration-300"
        />
      </Link>
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
              href={project.github}
              className="h-25 w-25 text-white bg-colors-quinary rounded-full p-1 shadow-lg hover:bg-blue-800 transition duration-300"
            >
              <DiGithubBadge />
            </a>
          </div>
        </div>
        <div>
          <h2 className="font-[400]">{project.title}</h2>
        </div>
        <div className="font-[200]">{project.desc}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
