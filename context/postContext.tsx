import { createContext, useContext, useState, useEffect } from "react";
import { deletePost, getPosts, createPost } from "../backend/backend";
import {
  IPostContextData,
  IPostProvider,
  IPostData,
  IOnAddPost,
} from "../interfaces/post.interface";

const PostContext = createContext({} as IPostContextData);

export function PostProvider({ children }: IPostProvider) {
  const [post, setPost] = useState<IPostData[]>([]);
  useEffect(() => {
    getPosts().then(setPost);
  }, []);

  function onDeletePost(id: number) {
    const postFiltered = post.filter((a) => a.id !== id);
    setPost(postFiltered);
    deletePost(id);
  }

  function onAddPost({ img, message, name }: IOnAddPost) {
    const data = {
      id: post.length,
      name,
      message,
      img,
    };
    setPost((state) => [...state, data]);
    createPost(data);
  }

  return (
    <PostContext.Provider value={{ post, onAddPost, onDeletePost }}>
      {children}
    </PostContext.Provider>
  );
}

export const usePost = () => useContext(PostContext);
