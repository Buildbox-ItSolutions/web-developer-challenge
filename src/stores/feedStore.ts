import { create } from "zustand";

type Post = {
  name: string;
  message: string;
  image: File;
};

type FeedStoreState = {
  posts: Post[];
};

type FeedStoreActions = {
  addPost: (
    title: Post["name"],
    description: Post["message"],
    image: Post["image"]
  ) => void;
  deletePost: (postIndex: number) => void;
};

export const useFeedStore = create<FeedStoreState & FeedStoreActions>(
  (set) => ({
    posts: [],
    addPost: function (name: string, message: string, image: File) {
      set((state) => ({ posts: [{ name, message, image }, ...state.posts] }));
    },
    deletePost: function (postIndex: number) {
      set((state) => ({
        posts: state.posts.filter((_, index) => postIndex != index),
      }));
    },
  })
);
