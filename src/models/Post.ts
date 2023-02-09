import { ImageListType } from "react-images-uploading";

export interface Post {
  id: string;
  name: string;
  message: string;
  photo: ImageListType;
}
