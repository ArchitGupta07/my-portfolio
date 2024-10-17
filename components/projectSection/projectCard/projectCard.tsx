import Image from "next/image";
import React from "react";
import "@/components/projectSection/projectCard/projectCard.css";
import { Project } from "@/data/projectsData";
import { GithubIcon } from "@/components/icons/socialIcons";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="project-card">
      <Image
        src="/sampleProj.jpg"
        alt="sample Project Image"
        width={400}
        height={200}
        className="proj-image"
      />
      <h1 className="proj-name">{project.name}</h1>
      <div className="project-info">
        <div className="info-side">
          <span>
            <p>Electronic Sign App</p>
            <p>{project.type}</p>
            <p>{project.year}</p>
          </span>
        </div>
        <div className="btn-side">
          <button>View Website</button>
          <button>
            <GithubIcon width={25} height={25} /> Gihtub Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
