import mongoose, { Schema } from "mongoose";

const infoSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  profession: {
    required: true,
    type: String,
  },
  social_links: {
    required: true,
    type: Array,
  },
  age: {
    required: true,
    type: Number,
  },
  citizenship: {
    required: true,
    type: String,
  },
  address: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  aboutme: {
    required: true,
    type: String,
  },
});

export const infoModel =
  mongoose.models.products ?? mongoose.model("info", infoSchema);
