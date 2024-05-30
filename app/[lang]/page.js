"use client";

import About from "@/components/about";
import Blogs from "@/components/blogs";
import ContacetMe from "@/components/contact";
import MenuBar from "@/components/menu-bar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Home({ params: { lang } }) {
  const [homeRef, setHomRef] = useState("");
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const blogsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
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

      <div className="flex flex-col items-center justify-center" ref={aboutRef}>
        <div className="lg:w-[60vw] text-xs lg:text-sm m-5 flex flex-col gap-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <About contactRef={contactRef} lang={lang} />
          </motion.div>
          <motion.div
            ref={skillsRef}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Skills lang={lang} />
          </motion.div>
          <div ref={projectsRef}>
            <Projects lang={lang} />
          </div>
          <div ref={blogsRef}>
            <Blogs lang={lang} />
          </div>
          <div ref={contactRef}>
            <ContacetMe lang={lang} />
          </div>
        </div>
      </div>
    </main>
  );
}
