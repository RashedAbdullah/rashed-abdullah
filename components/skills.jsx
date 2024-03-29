import React from "react";
import Title from "./title";
import SkillCard from "./skill-card";
import { skills } from "@/data/skills";

const Skills = () => {
  return (
    <div className="">
      <Title>Skills</Title>
      <div className="lg:flex gap-3 w-full">
        {skills.map((skill) => (
          <SkillCard key={skill.type} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
