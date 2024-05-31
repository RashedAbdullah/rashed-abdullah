"use client";

import Blogs from "@/components/blogs";

const BlogsPage = ({ params: { lang } }) => {
  return (
    <div className="lg:mx-40 mx-5">
      <Blogs lang={lang} />
    </div>
  );
};

export default BlogsPage;
