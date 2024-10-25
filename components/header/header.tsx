"use client";

import React, { useEffect, useState } from "react";
import "@/components/header/header.css";

import { usePathname } from "next/navigation";

// import { getSession, logout } from "@/utils/actions";
// import { SessionData } from "@/utils/lib";

interface HeaderProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  heroRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
  aboutRef: React.RefObject<HTMLElement>;
  projectRef: React.RefObject<HTMLElement>;
}

const Header: React.FC<HeaderProps> = ({
  scrollToSection,
  heroRef,
  contactRef,
  aboutRef,
  projectRef,
}) => {
  const path = usePathname();
  // console.log(path);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currSection, setCurrSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track current section in view
      const heroOffset = heroRef.current?.offsetTop ?? 0;
      const aboutOffset = aboutRef.current?.offsetTop ?? 0;
      const projectOffset = projectRef.current?.offsetTop ?? 0;
      const contactOffset = contactRef.current?.offsetTop ?? 0;
      const scrollPos = window.scrollY + window.innerHeight / 2;

      if (scrollPos >= contactOffset) {
        setCurrSection("contact");
      } else if (scrollPos >= projectOffset) {
        setCurrSection("projects");
      } else if (scrollPos >= aboutOffset) {
        setCurrSection("about");
      } else {
        setCurrSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [heroRef, aboutRef, projectRef, contactRef]);

  const handleNavigation = (
    section: string,
    ref: React.RefObject<HTMLElement>
  ) => {
    setCurrSection(section);
    scrollToSection(ref);
  };

  return (
    <header className={` header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo-part">
          {/* <Image src="/logo.png" width={40} height={40} alt="logo" /> */}
          <h2>&lt; Archit Gupta /&gt;</h2>
        </div>
        <nav>
          <ul>
            <li
              className={
                currSection === "home"
                  ? "active main-header-list"
                  : "main-header-list"
              }
            >
              <button onClick={() => handleNavigation("home", heroRef)}>
                Home
              </button>
            </li>

            <li
              className={
                currSection === "about"
                  ? "active main-header-list"
                  : "main-header-list"
              }
            >
              <button onClick={() => handleNavigation("about", aboutRef)}>
                About
              </button>
            </li>
            <li
              className={
                currSection === "projects"
                  ? "active main-header-list"
                  : "main-header-list"
              }
            >
              <button onClick={() => handleNavigation("projects", projectRef)}>
                Projects
              </button>
            </li>
            <li
              className={
                currSection === "contact"
                  ? "active main-header-list"
                  : "main-header-list"
              }
            >
              <button onClick={() => handleNavigation("contact", contactRef)}>
                Contact
              </button>
            </li>
            {/* <li
            className={
              path === "/dashboard/about"
                ? "active main-header-list"
                : "main-header-list"
            }
          > */}
            {/* <Link href="/dashboard/about"></Link> */}
            {/* </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
