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

  // Add scroll event listener to change the background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Change 50 to your desired scroll value
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`container header ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo-part">
        {/* <Image src="/logo.png" width={40} height={40} alt="logo" /> */}
        <h2>&lt; Archit Gupta /&gt;</h2>
      </div>
      <nav>
        <ul>
          <li
            className={
              path === "/dashboard"
                ? "active main-header-list"
                : "main-header-list"
            }
          >
            <button onClick={() => scrollToSection(heroRef)}>Home</button>
          </li>

          <li
            className={
              path === "/dashboard/exams"
                ? "active main-header-list"
                : "main-header-list"
            }
          >
            <button onClick={() => scrollToSection(aboutRef)}>About</button>
          </li>
          <li
            className={
              path === "/dashboard/blog"
                ? "active main-header-list"
                : "main-header-list"
            }
          >
            <button onClick={() => scrollToSection(projectRef)}>
              Projects
            </button>
          </li>
          <li
            className={
              path === "/dashboard/code"
                ? "active main-header-list"
                : "main-header-list"
            }
          >
            <button onClick={() => scrollToSection(contactRef)}>Contact</button>
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
    </header>
  );
};

export default Header;
