import { IconProps } from "@/components/icons/socialIcons";
import React from "react";

interface SkillItemProps {
  name: string;
  Icon: React.FC<IconProps>;
}
const SkillsGridItem: React.FC<SkillItemProps> = ({ name, Icon }) => {
  return (
    <div className="skill-item">
      <Icon width={45} height={45} />
      <h1>{name}</h1>
    </div>
  );
};

export default SkillsGridItem;
