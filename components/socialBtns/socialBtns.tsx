import Link from "next/link";
import React from "react";
import {
  GithubIcon,
  LeetCodeDark,
  LinkedInLight,
} from "@/components/icons/socialIcons";

const SocialBtns = () => {
  return (
    <div className="social-btns">
      <Link
        href="https://github.com/ArchitGupta07" // Replace with your GitHub profile link
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn"
        aria-label="GitHub"
      >
        <GithubIcon width={45} height={45} />
      </Link>
      <Link
        href="https://github.com/ArchitGupta07" // Replace with your GitHub profile link
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn"
        aria-label="GitHub"
      >
        <LeetCodeDark width={45} height={45} />
      </Link>
      <Link
        href="https://github.com/ArchitGupta07" // Replace with your GitHub profile link
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn"
        aria-label="GitHub"
      >
        <LinkedInLight width={50} height={50} />
      </Link>
    </div>
  );
};

export default SocialBtns;
