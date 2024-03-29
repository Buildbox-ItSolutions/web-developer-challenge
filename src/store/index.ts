import { create } from "zustand";

interface Post {
  id: string;
  avatarImg: string | null;
  name: string;
  message: string;
}

export interface FeedState {
  posts: Post[];
  addPost: (post: Post) => void;
  deletePost: (id: string) => void;
}

export const useStore = create<FeedState>((set) => ({
  posts: [],
  addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
  deletePost: (id) =>
    set((state) => ({ posts: state.posts.filter((post) => post.id !== id) })),
}));
