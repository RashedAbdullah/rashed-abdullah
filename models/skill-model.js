import mongoose, { Schema } from "mongoose";

const skillSchema = new Schema({
  skill_name: {
    required: true,
    type: String,
  },
  skill_capacity: {
    required: true,
    type: String,
  },
});

export const skillModel =
  mongoose.models.products ?? mongoose.model("skills", skillSchema);
