"use client";

import { useRef } from "react";
import ContactSection from "@/components/contactSection/contactSection";
import Header from "@/components/header/header";
import HeroSection from "@/components/heroSection/heroSection";
import Footer from "@/components/footer/footer";
import About from "@/components/about/about";
import ProjectSection from "@/components/projectSection/projectSection";

export default function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current !== null) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <main>
      <Header
        scrollToSection={scrollToSection}
        heroRef={heroRef}
        contactRef={contactRef}
        aboutRef={aboutRef}
        projectRef={projectRef}
      />
      <section ref={heroRef}>
        <HeroSection />
      </section>

      <section ref={aboutRef}>
        <About />
      </section>

      <section ref={projectRef}>
        <ProjectSection />
      </section>

      <section ref={contactRef}>
        <ContactSection />
      </section>

      <Footer />
    </main>
  );
}
