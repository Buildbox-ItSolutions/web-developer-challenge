import mongoose from "mongoose";

export interface ContentDocument extends mongoose.Document {
  author: string;
  message: string;
  imageName: string | undefined;
}

const contentSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    imageName: {
      type: String,
      required: true,
    },
  },
  { timestamps: false }
);

const ContentModel = mongoose.model<ContentDocument>("content", contentSchema);

export default ContentModel;
