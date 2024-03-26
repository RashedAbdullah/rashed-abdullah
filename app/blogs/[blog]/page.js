import ScrollAnimation from "@/components/scroll-animation";
import { blogs } from "@/data/blogs";
import Image from "next/image";
import React from "react";

const Blog = ({ params: { blog } }) => {
  const matchedBlog = blogs.find((blg) => String(blg.id) === blog);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="lg:w-[60vw] text-xs lg:text-sm m-5 flex flex-col gap-10">
        <div className="bg-white p-5">
          <div>
            <Image height={1500} width={1500} src="/blog.jpg" alt="" />
          </div>
          <div>
            <h2 className="text-2xl font-[200] mt-4">{matchedBlog.title}</h2>
            <p className="font-[100] text-xs mt-2">{`${matchedBlog.day} ${matchedBlog.month} ${matchedBlog.year}`}</p>
          </div>
          <div className="font-[200]">
            {matchedBlog.content.map((blg) => (
              <p key={blg} className="mt-5">
                {blg}
              </p>
            ))}
          </div>
        </div>
      </div>
      <ScrollAnimation />
    </div>
  );
};

export default Blog;
