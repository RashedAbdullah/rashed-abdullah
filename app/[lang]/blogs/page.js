"use client";

import Blogs from "@/components/blogs";

const BlogsPage = ({ params: { lang } }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="lg:w-[60vw] text-xs lg:text-sm m-5 flex flex-col gap-10">
        <Blogs lang={lang} />
      </div>
    </div>
  );
};

export default BlogsPage;
