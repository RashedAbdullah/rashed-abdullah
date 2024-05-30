import mongoose, { Schema } from "mongoose";

const skillSchema = new Schema({
  skill_type: {
    required: true,
    type: String,
  },
  allSkills: {
    required: true,
    type: Array,
  },
});

export const skillModel_bn =
  mongoose.models.skills_bn ?? mongoose.model("skills_bn", skillSchema);
