"use client";

import React, { useState } from "react";
import "@/components/heroSection/heroSection.css";
import TypingEffect from "../typingEffect";
import SocialBtns from "../socialBtns/socialBtns";
import ResumeModal from "../resume/resume";

const HeroSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <section className="hero-section">
      <div className={`container ${isDarkMode ? "dark-theme" : "light-theme"}`}>
        <div className="hero-content">
          <div className="main-h1">
            <h1>Hi, I am Archit</h1>

            <TypingEffect
              texts={["Full Stack Developer.", "Mobile Developer"]}
              speed={100}
              pauseTime={2000} // Pause between texts
            />
          </div>

          <p>
            I am exploring new technologies and looking for opportunities to
            grow and learn in the software development field.
          </p>

          <SocialBtns />

          <div className="hero-buttons">
            {/* <button onClick={toggleTheme}>Resume</button> */}
            {/* <button>Contact</button> */}
            <ResumeModal pdfUrl="/resume.pdf" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
