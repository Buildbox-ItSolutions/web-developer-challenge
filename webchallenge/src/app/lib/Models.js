import mongoose from "mongoose";

const webchallengeSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
    },
    slug: {
      type: Number,
    },
    autor: {
      type: String,
    },
    src: {
      type: String,
    },
  },
  { timestamps: true }
);

export const WebChallenge =
  mongoose.models?.WebChallenge ||
  mongoose.model("WebChallenge", webchallengeSchema);
