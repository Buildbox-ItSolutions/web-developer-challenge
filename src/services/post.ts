import { PostProps } from "../types/components";

export const getPosts = () => {
  const storedPosts = localStorage.getItem("posts_collection");

  if (storedPosts) {
    const parsePosts = JSON.parse(storedPosts) as PostProps[];

    return parsePosts;
  }
  return [];
};

export const postPost = (newPost: PostProps) => {
  const storedPosts = localStorage.getItem("posts_collection");

  if (storedPosts) {
    const parsePosts = JSON.parse(storedPosts) as PostProps[];

    parsePosts.push(newPost);

    localStorage.setItem("posts_collection", JSON.stringify(parsePosts));
  }

  localStorage.setItem("posts_collection", JSON.stringify([newPost]));
};
