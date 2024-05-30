"use server";

import { blogModel } from "@/models/blog-model";
import { projectModel } from "@/models/project-model";
import { connectMongo } from "@/database/connection";

const getProjects = async () => {
  try {
    await connectMongo();

    const projects = await projectModel.find();
    return projects;
  } catch (err) {
    console.log(err.message);
  }
};

const getBlogs = async () => {
  try {
    await connectMongo();

    const blogs = await blogModel.find();
    return blogs;
  } catch (err) {
    console.log(err.message);
  }
};

const getBlogById = async (blogId) => {
  try {
    await connectMongo();

    const blog = await blogModel.findById(blogId);
    return blog;
  } catch (err) {
    console.log(err.message);
  }
};
export { getProjects, getBlogs, getBlogById };
