import React from "react";
import { Post } from "_types";

export const usePosts = () => {
  const [posts, setPosts] = React.useState<Post[]>([]);

  const createPost = React.useCallback((post: Post) => {
    setPosts((prevPosts) => {
      prevPosts.push(post);
      return [...prevPosts];
    });
  }, []);

  const removePost = React.useCallback((postIndex: number) => {
    setPosts((prevPosts) => {
      prevPosts.splice(postIndex, 1);
      return [...prevPosts];
    });
  }, []);

  return { createPost, posts, removePost };
};
