import { getBlogById_ar, getBlogById_bn, getBlogById_en } from "@/actions";
import ScrollAnimation from "@/components/scroll-animation";
import Image from "next/image";
import React from "react";

const Blog = async ({ params: { blog, lang } }) => {
  const blogById =
    lang === "ar"
      ? await getBlogById_ar(blog)
      : lang === "bn"
      ? await getBlogById_bn(blog)
      : await getBlogById_en(blog);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="lg:w-[60vw] text-xs lg:text-sm m-5 flex flex-col gap-10">
        <div className="bg-white p-5">
          <div>
            <Image
              src={blogById.thumbnail}
              alt={blogById.title}
              height={900}
              width={900}
            />
          </div>
          <div>
            <h2 className="text-2xl font-[200] mt-4">{blogById.title}</h2>
            <p className="font-[100] text-xs mt-2">{`${blogById.day} ${blogById.month} ${blogById.year}`}</p>
          </div>
          <div className="font-[200]">
            <p className="mt-5 whitespace-pre-wrap">{blogById.content}</p>
          </div>
        </div>
      </div>
      <ScrollAnimation />
    </div>
  );
};

export default Blog;
