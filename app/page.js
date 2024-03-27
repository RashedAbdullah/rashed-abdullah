"use client";

import About from "@/components/about";
import Blogs from "@/components/blogs";
import ContacetMe from "@/components/contact";
import GoToTop from "@/components/go-to-top";
import MenuBar from "@/components/menu-bar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { useRef, useState } from "react";

export default function Home() {
  // Refs for each section to scroll to
  const [homeRef, setHomRef] = useState("");
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const blogsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main>
      <MenuBar
        refs={{
          homeRef,
          aboutRef,
          skillsRef,
          projectsRef,
          blogsRef,
          contactRef,
          scrollToSection,
        }}
      />
      <GoToTop onScrollTop={scrollToTop} />
      <div className="flex flex-col items-center justify-center" ref={aboutRef}>
        <div className="lg:w-[60vw] text-xs lg:text-sm m-5 flex flex-col gap-10">
          <div>
            <About />
          </div>
          <div ref={skillsRef}>
            <Skills />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
          <div ref={blogsRef}>
            {" "}
            <Blogs />
          </div>
          <div ref={contactRef}>
            <ContacetMe />
          </div>
        </div>
      </div>
    </main>
  );
}
