import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
  title: {
    required: true,
    type: String,
  },
  desc: {
    required: true,
    type: String,
  },
  category: {
    required: true,
    type: String,
  },
  tools: {
    required: true,
    type: Array,
  },
  thumbnail: {
    required: true,
    type: String,
  },
  code: {
    required: true,
    type: String,
  },
  live: {
    required: true,
    type: String,
  },
});

export const projectModel_ar =
  mongoose.models.projects_ar ?? mongoose.model("projects_ar", projectSchema);
