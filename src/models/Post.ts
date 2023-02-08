import { ImageListType } from "react-images-uploading";

export interface Post {
  id: string;
  photo: ImageListType;
  name: string;
  description: string;
}
