import React from "react";
import "@/components/projectSection/projectSection.css";
import { projects } from "@/data/projectsData";
import ProjectCard from "./projectCard/projectCard";

const ProjectSection = () => {
  return (
    <section className="project-section">
      <div className="section-header">
        <h1>My Projects</h1>
      </div>
      <div className="container">
        {projects.map((proj, index) => (
          <ProjectCard key={index} project={proj} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
