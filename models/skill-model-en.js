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

export const skillModel_en =
  mongoose.models.skills_en ?? mongoose.model("skills_en", skillSchema);
