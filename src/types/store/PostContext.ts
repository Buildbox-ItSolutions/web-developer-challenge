import { PostProps } from "../components";

export type PostContextProps = {
  postsData: PostProps[];
  handlePostNewItem: (newPost: PostProps) => void;
  deletePost: (id: string) => void;
  setPostsData: (posts: PostProps[]) => void;
};
