import Image from "next/image";
import Title from "./title";
import { blogs } from "@/data/blogs";
import BlogCard from "./blog-card";

const Blogs = () => {
  return (
    <div>
      <Title>Blogs</Title>
      <div className="lg:grid grid-cols-2 gap-5">
        {/* Blog start */}
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
