import Image from "next/image";
import Title from "./title";
// import { blogs } from "@/data/blogs";
import BlogCard from "./blog-card";
import { useLanguage } from "@/contexts/language-provider";
import { useEffect, useState } from "react";
import { getBlogs_en } from "@/actions";

const Blogs = ({ lang }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const data = await getBlogs_en();
      setBlogs(data);
    };
    getBlogs();
  }, []);
  const langs = useLanguage();
  return (
    <div>
      <Title>{langs.blogs}</Title>
      <div className="lg:grid grid-cols-2 gap-5">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} lang={lang} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
