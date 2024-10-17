import { IconProps } from "@/components/icons/socialIcons";
import React from "react";
import "@/components/about/skillsGrid/gridItem/skillGridItem.css";

interface SkillItemProps {
  name: string;
  Icon: React.FC<IconProps>;
}
const SkillsGridItem: React.FC<SkillItemProps> = ({ name, Icon }) => {
  return (
    <div className="skill-item">
      <div className="icon-wrapper">
        <Icon width={30} height={30} />
      </div>
      <h3>{name}</h3>
    </div>
  );
};

export default SkillsGridItem;
