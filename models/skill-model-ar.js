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

export const skillModel_ar =
  mongoose.models.skills_ar ?? mongoose.model("skills_ar", skillSchema);
