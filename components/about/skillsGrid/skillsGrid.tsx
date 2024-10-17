import skills from "@/data/skillsData";
import React from "react";
import SkillsGridItem from "./gridItem/skillsGridItem";
import "@/components/about/skillsGrid/skillsGrid.css";

const SkillsGrid = () => {
  return (
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <SkillsGridItem key={index} name={skill.name} Icon={skill.Icon} />
      ))}
    </div>
  );
};

export default SkillsGrid;
