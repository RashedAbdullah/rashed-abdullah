import About from "@/components/about";
import Blogs from "@/components/blogs";
import ContacetMe from "@/components/contact";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <div className="lg:w-[60vw] text-xs lg:text-sm m-5 flex flex-col gap-10">
          <About />
          <Skills />
          <Projects />
          <Blogs />
          <ContacetMe />
        </div>
      </div>
    </main>
  );
}
