import React, { useEffect, useState } from "react";
import Title from "./title";
import SkillCard from "./skill-card";
import { skills } from "@/data/skills";
import { useLanguage } from "@/contexts/language-provider";
import { getSkills_en } from "@/actions";

const Skills = ({ lang }) => {
  const [skillss, setSkills] = useState([]);
  const langs = useLanguage();
  console.log(skillss);
  useEffect(() => {
    const getData = async () => {
      const data = await getSkills_en();
      setSkills(data);
    };
    getData();
  }, [lang]);
  return (
    <div>
      <Title>{langs.skills}</Title>
      <div className="lg:flex gap-3 w-full">
        {skills.map((skill) => (
          <SkillCard key={skill.type} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
