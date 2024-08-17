import { IPost } from "./post.types";

export interface IPostContext {
  posts: IPost[];
  savePost: (post: IPost) => void;
  deletePost: (id: string) => void;
}
