import { create } from "zustand";
import { PostType } from "../types/post";
import { v4 as uuidv4 } from "uuid";

type PostStore = {
  postList: PostType[];
  createPost: (post: Omit<PostType, "id">) => void;
  deletePost: (post: PostType["id"]) => void;
};

export const usePostStore = create<PostStore>()((set) => ({
  postList: [],
  createPost: (post) =>
    set((state) => {
      const id = uuidv4();
      return { postList: [...state.postList, { id: id, ...post }] };
    }),
  deletePost: (id) =>
    set((state) => ({
      postList: state.postList.filter((post) => post.id !== id),
    })),
}));
