import Image from "next/image";
import Title from "./title";
import { blogs } from "@/data/blogs";
import BlogCard from "./blog-card";
import { useLanguage } from "@/contexts/language-provider";

const Blogs = ({ lang }) => {
  const langs = useLanguage();
  return (
    <div>
      <Title>{langs.blogs}</Title>
      <div className="lg:grid grid-cols-2 gap-5">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
