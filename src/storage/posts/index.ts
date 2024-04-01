import { Post } from "@lib/features/posts/postsSlice";
import { StorageKeys } from "./types";

export const setStorage = (data: Post[]) => {
  localStorage.setItem(StorageKeys.posts, JSON.stringify(data));
};

export const readStorage = () => {
  let data: Post[] = [];

  try {
    const storage = localStorage.getItem(StorageKeys.posts);

    if (storage !== null) {
      data = JSON.parse(storage);
    }
  } catch (err) {
    console.error(err);
  }

  return data;
};
