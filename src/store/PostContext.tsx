import React, { createContext, FC, useContext, useState } from "react";
import { postPost } from "../services/post";
import { PostProps } from "../types/components";
import { PostContextProps } from "../types/store";

const PostContext = createContext<PostContextProps>({} as PostContextProps);

const PostContextProvider: FC<{ children: JSX.Element }> = (props) => {
  const [postsData, setPostsData] = useState<PostProps[]>([]);

  const handlePostNewItem = (newPost: PostProps) => {
    setPostsData((oldPosts) => [newPost, ...oldPosts]);
    postPost(newPost);
  };

  const deletePost = (id: string) => {
    const newPosts = postsData.filter((post) => post.id !== id);

    setPostsData(newPosts);
  };

  return (
    <PostContext.Provider
      value={{ postsData, handlePostNewItem, deletePost, setPostsData }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

const usePostContext = () => useContext(PostContext);

export { PostContextProvider, usePostContext };
