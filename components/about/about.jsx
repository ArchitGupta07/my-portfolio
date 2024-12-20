import React from "react";
import "@/components/about/about.css";
import SkillsGrid from "./skillsGrid/skillsGrid";
const About = () => {
  return (
    <section className="about-section">
      <div className="section-header">
        <h1>About Me</h1>
      </div>
      <div className="container">
        <h1>A bit about me</h1>
        <p>
          I&apos;m a recent graduate from Shiv Nadar University and a passionate
          software engineer with strong foundations in data structures,
          algorithms and databases. I have hands-on experience working with
          technologies including Next.js, React for the frontend, and Python,
          FastAPI, Django, Node.js, Nest.js and .NET for the backend. I am
          always eager to learn and adapt to new technologies, constantly
          looking for opportunities to grow as a full-stack developer.
        </p>

        <h1>Technologies and Tools</h1>
        <p>
          I develop user-centric, high-performance apps and websites using a
          blend of innovative technologies and trusted open-source tools.
        </p>
        <SkillsGrid />
      </div>
    </section>
  );
};

export default About;
