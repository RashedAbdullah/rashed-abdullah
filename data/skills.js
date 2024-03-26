import { BiSolidUser } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";

export const skills = [
  {
    type: "Professional",
    icon: <BiSolidUser color="white" />,
    skills: [
      {
        name: "JavaScript",
        consume: "61%",
      },
      {
        name: "React.js",
        consume: "76%",
      },
      {
        name: "Next.js",
        consume: "70%",
      },
      {
        name: "TailwindCSS",
        consume: "79%",
      },
    ],
  },
  {
    type: "Personal",
    icon: <IoSettingsSharp color="white" />,
    skills: [
      {
        name: "Communication",
        consume: "56%",
      },
      {
        name: "Team Work",
        consume: "45%",
      },
      {
        name: "Language",
        consume: "83%",
      },
      {
        name: "Creativity",
        consume: "79%",
      },
    ],
  },
];
