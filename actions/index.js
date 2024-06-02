"use server";

import { connectMongo } from "@/database/connection";
import { blogModel_ar } from "@/models/blog-model-ar";
import { blogModel_bn } from "@/models/blog-model-bn";
import { blogModel_en } from "@/models/blog-model-en";
import { projectModel_ar } from "@/models/project-model-ar";
import { projectModel_bn } from "@/models/project-model-bn";
import { projectModel_en } from "@/models/project-model-en";
import { skillModel_ar } from "@/models/skill-model-ar";
import { skillModel_bn } from "@/models/skill-model-bn";
import { skillModel_en } from "@/models/skill-model-en";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";

const getProjects_en = async () => {
  try {
    await connectMongo();

    const projects = await projectModel_en.find();
    return replaceMongoIdInArray(projects);
  } catch (err) {
    console.log(err.message);
  }
};

const getProjects_ar = async () => {
  try {
    await connectMongo();

    const projects = await projectModel_ar.find();
    return replaceMongoIdInArray(projects);
  } catch (err) {
    console.log(err.message);
  }
};

const getProjects_bn = async () => {
  try {
    await connectMongo();

    const projects = await projectModel_bn.find();
    return replaceMongoIdInArray(projects);
  } catch (err) {
    console.log(err.message);
  }
};

const getBlogs_en = async () => {
  try {
    await connectMongo();

    const blogs = await blogModel_en.find();
    return replaceMongoIdInArray(blogs);
  } catch (err) {
    console.log(err.message);
  }
};

const getBlogs_ar = async () => {
  try {
    await connectMongo();

    const blogs = await blogModel_ar.find();
    return replaceMongoIdInArray(blogs);
  } catch (err) {
    console.log(err.message);
  }
};

const getBlogs_bn = async () => {
  try {
    await connectMongo();

    const blogs = await blogModel_bn.find();
    return replaceMongoIdInArray(blogs);
  } catch (err) {
    console.log(err.message);
  }
};

const getSkills_en = async () => {
  try {
    await connectMongo();

    const skills = await skillModel_en.find();
    return replaceMongoIdInArray(skills);
  } catch (err) {
    console.log(err.message);
  }
};

const getSkills_ar = async () => {
  try {
    await connectMongo();

    const skills = await skillModel_ar.find();
    return replaceMongoIdInArray(skills);
  } catch (err) {
    console.log(err.message);
  }
};

const getSkills_bn = async () => {
  try {
    await connectMongo();

    const skills = await skillModel_bn.find();
    return replaceMongoIdInArray(skills);
  } catch (err) {
    console.log(err.message);
  }
};

const getBlogById_en = async (blogId) => {
  try {
    await connectMongo();

    const blog = await blogModel_en.findById(blogId);
    return replaceMongoIdInObject(blog);
  } catch (err) {
    console.log(err.message);
  }
};

const getBlogById_ar = async (blogId) => {
  try {
    await connectMongo();

    const blog = await blogModel_ar.findById(blogId);
    return replaceMongoIdInObject(blog);
  } catch (err) {
    console.log(err.message);
  }
};

const getBlogById_bn = async (blogId) => {
  try {
    await connectMongo();

    const blog = await blogModel_bn.findById(blogId);
    return replaceMongoIdInObject(blog);
  } catch (err) {
    console.log(err.message);
  }
};

export {
  getProjects_en,
  getProjects_ar,
  getProjects_bn,
  getBlogs_en,
  getBlogs_ar,
  getBlogs_bn,
  getSkills_en,
  getSkills_ar,
  getSkills_bn,
  getBlogById_en,
  getBlogById_ar,
  getBlogById_bn,
};
