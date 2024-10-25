import { IconProps } from "@/components/icons/socialIcons";
import React, { useEffect } from "react";
import "@/components/about/skillsGrid/gridItem/skillGridItem.css";
import AOS from "aos";
import "aos/dist/aos.css";

interface SkillItemProps {
  name: string;
  Icon: React.FC<IconProps>;
}
const SkillsGridItem: React.FC<SkillItemProps> = ({ name, Icon }) => {
  useEffect(() => {
    // Initialize AOS with settings
    AOS.init({
      duration: 500, // Animation duration (ms)
      once: false, // Set to false to re-trigger animation when scroll back
      easing: "ease-in-out-back", // Ease function for animation
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="skill-item"
    >
      <div className="icon-wrapper">
        <Icon width={30} height={30} />
      </div>
      <h3>{name}</h3>
    </div>
  );
};

export default SkillsGridItem;
