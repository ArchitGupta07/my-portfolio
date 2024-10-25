"use client";

import { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AosWrapperProps {
  children: ReactNode;
}

const AosWrapper: React.FC<AosWrapperProps> = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      easing: "ease-out",
    });
  }, []);

  return <div>{children}</div>;
};

export default AosWrapper;
