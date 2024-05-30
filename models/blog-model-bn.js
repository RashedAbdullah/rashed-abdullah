import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
  title: {
    required: true,
    type: String,
  },
  content: {
    required: true,
    type: String,
  },
  category: {
    required: true,
    type: String,
  },
  tags: {
    required: true,
    type: Array,
  },
  thumbnail: {
    required: true,
    type: String,
  },
  day: {
    required: true,
    type: String,
  },
  month: {
    required: true,
    type: String,
  },
  year: {
    required: true,
    type: String,
  },
});

export const blogModel_bn =
  mongoose.models.blogs_bn ?? mongoose.model("blogs_bn", blogSchema);
