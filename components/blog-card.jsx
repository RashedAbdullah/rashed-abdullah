import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-provider";

const BlogCard = ({ blog, lang }) => {
  const langs = useLanguage();

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-colors-dark_card shadow relative lg:mt-0 mt-5"
    >
      <div className="overflow-hidden">
        <Link href={`/${lang}/blogs/${blog.id}`} className="">
          <Image
            src={blog.thumbnail}
            height={1000}
            width={1000}
            alt=""
            className="p-1 object-cover hover:scale-105 transition duration-300"
          />
        </Link>
      </div>
      <div className="px-5">
        <div className="bg-colors-quinary h-12 w-12 rounded-full text-white font-[200] flex justify-center items-center shadow-xl absolute translate-y-[-50%] translate-x-[-50%] left-[50%]">
          <div className="flex flex-col items-center justify-center leading-3">
            <p className="font-[300] text-lg leading-4">{blog.day}</p>
            <p className="text-xs leading-3">{blog.month}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <ul className="flex gap-1 mt-2">
            {blog.tags.map((tag) => (
              <li
                key={tag}
                className="bg-colors-primary p-1 px-2 rounded-sm text-xs font-[100]"
              >
                #{tag}
              </li>
            ))}
          </ul>

          <h2 className="text-lg dark:text-white">{blog.title}</h2>
          <p className="font-[200] text-sm dark:text-white">
            {blog.content.slice(0, 280)} ...
          </p>
          <div>
            <Link href={`/${lang}/blogs/${blog.title.replace(" ", "_")}`}>
              <button className="bg-colors-quinary text-white px-5 py-2 mb-5 hover:bg-blue-800 transition">
                {langs.readmore}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
