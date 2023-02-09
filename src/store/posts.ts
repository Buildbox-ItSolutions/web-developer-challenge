import { create } from "zustand";
import { Post } from "../models/Post";

interface PostState {
  posts: Post[];
  createPost: (post: Post) => void;
  deletePost: (postId: string) => void;
}

export const usePostStore = create<PostState>()((set) => ({
  posts: [],
  createPost: (post) =>
    set((state) => ({
      posts: [...state.posts, post],
    })),
  deletePost: (postId) =>
    set((state) => ({
      posts: [...state.posts.filter((post) => post.id !== postId)],
    })),
}));
