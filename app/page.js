"use client";
import About from "@/components/about";
import Blogs from "@/components/blogs";
import ContacetMe from "@/components/contact";
import Footer from "@/components/footer";
import MenuBar from "@/components/menu-bar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { useRef, useState } from "react";

export default function Home() {
  const viewOnScroll = useRef(null);
  const [isHide, setIsHide] = useState(false);

  const handelScrollView = () => {
    viewOnScroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main ref={viewOnScroll} id="About">
      <MenuBar
        onView={handelScrollView}
        isHide={isHide}
        setIsHide={setIsHide}
      />
      <div className="flex flex-col items-center justify-center">
        <div className="lg:w-[60vw] text-xs lg:text-sm m-5 flex flex-col gap-10">
          <div>
            <About />
          </div>
          <div ref={viewOnScroll} id="">
            <Skills />
          </div>
          <Projects />
          <Blogs />
          <ContacetMe />
        </div>
      </div>
    </main>
  );
}
