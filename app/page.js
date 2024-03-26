import About from "@/components/about";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="lg:w-[60vw] text-xs lg:text-sm m-5 flex flex-col gap-10">
          <About />
          <Skills />
          <Projects />
        </div>
      </div>
    </main>
  );
}
