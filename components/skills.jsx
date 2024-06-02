import React, { useEffect, useState } from "react";
import Title from "./title";
import SkillCard from "./skill-card";
import { useLanguage } from "@/contexts/language-provider";
import { getSkills_ar, getSkills_bn, getSkills_en } from "@/actions";

const Skills = ({ lang }) => {
  const [skills, setSkills] = useState([]);
  const langs = useLanguage();

  useEffect(() => {
    const getData = async () => {
      const data =
        lang === "ar"
          ? await getSkills_ar()
          : lang === "bn"
          ? await getSkills_bn()
          : await getSkills_en();

      setSkills(data);
    };
    getData();
  }, [lang]);

  return (
    <div>
      <Title>{langs.skills}</Title>
      <div
        className="lg:flex gap-3 w-full"
        dir={lang === "ar" ? "rtl" : undefined}
      >
        {skills.map((skill) => (
          <SkillCard key={skill.skill_type} skill={skill} lang={lang} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
