import Image from "next/image";
import React from "react";
import "@/components/projectSection/projectCard/projectCard.css";
import { Project } from "@/data/projectsData";
import { GithubIcon } from "@/components/icons/socialIcons";
import AosWrapper from "@/components/aosWrapper";
import Link from "next/link";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <AosWrapper>
      <div data-aos="zoom-in-up" className="project-card">
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
            <Link href={project.deployedLink}>View Website</Link>
            <Link href={project.githubLink}>
              <GithubIcon width={25} height={25} /> Gihtub Link
            </Link>
          </div>
        </div>
      </div>
    </AosWrapper>
  );
};

export default ProjectCard;
