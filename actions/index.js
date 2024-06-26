"use server";

import { connectMongo } from "@/database/connection";
import { blogModel_ar } from "@/models/blog-model-ar";
import { blogModel_bn } from "@/models/blog-model-bn";
import { blogModel_en } from "@/models/blog-model-en";
import { skillModel_ar } from "@/models/skill-model-ar";
import { skillModel_bn } from "@/models/skill-model-bn";
import { skillModel_en } from "@/models/skill-model-en";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";

const getBlogs_en = async () => {
  try {
    await connectMongo();

    const blogs = await blogModel_en.find().lean();
    return replaceMongoIdInArray(blogs);
  } catch (err) {
    console.log(err.message);
  }
};

const getBlogs_ar = async () => {
  try {
    await connectMongo();

    const blogs = await blogModel_ar.find().lean();
    return replaceMongoIdInArray(blogs);
  } catch (err) {
    console.log(err.message);
  }
};

const getBlogs_bn = async () => {
  try {
    await connectMongo();

    const blogs = await blogModel_bn.find().lean();
    return replaceMongoIdInArray(blogs);
  } catch (err) {
    console.log(err.message);
  }
};

const getSkills_en = async () => {
  try {
    await connectMongo();

    const skills = await skillModel_en.find().lean();
    return replaceMongoIdInArray(skills);
  } catch (err) {
    console.log(err.message);
  }
};

const getSkills_ar = async () => {
  try {
    await connectMongo();

    const skills = await skillModel_ar.find().lean();
    return replaceMongoIdInArray(skills);
  } catch (err) {
    console.log(err.message);
  }
};

const getSkills_bn = async () => {
  try {
    await connectMongo();

    const skills = await skillModel_bn.find().lean();
    return replaceMongoIdInArray(skills);
  } catch (err) {
    console.log(err.message);
  }
};

const getBlogById_en = async (blogId) => {
  try {
    await connectMongo();

    const blog = await blogModel_en.findById(blogId).lean();
    return replaceMongoIdInObject(blog);
  } catch (err) {
    console.log(err.message);
  }
};

const getBlogById_ar = async (blogId) => {
  try {
    await connectMongo();

    const blog = await blogModel_ar.findById(blogId).lean();
    return replaceMongoIdInObject(blog);
  } catch (err) {
    console.log(err.message);
  }
};

const getBlogById_bn = async (blogId) => {
  try {
    await connectMongo();

    const blog = await blogModel_bn.findById(blogId).lean();
    return replaceMongoIdInObject(blog);
  } catch (err) {
    console.log(err.message);
  }
};

export {
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
