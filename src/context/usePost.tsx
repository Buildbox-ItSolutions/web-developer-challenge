import { createContext, ReactNode, useContext, useState } from "react";
import { IPost } from "../types/IPost";

interface IPostProvider {
  children: ReactNode;
}

interface IAddPost {
  image: string | undefined;
  author: string;
  message: string;
}

interface IPostContextData {
  post: IPost[]
  deletePost: (id: number) => void;
  addPost: ({ image, message, author }: IAddPost) => void;
}

const PostContext = createContext({} as IPostContextData);

export function PostProvider({ children }: IPostProvider) {
  const [post, setPost] = useState<IPost[]>([])


  function addPost({ image, message, author }: IAddPost) {
    const data = {
      id: post.length,
      author,
      message,
      image
    }

    setPost(state => [...state, data])
  }

  function deletePost(id: number) {
    const postFilter = post.filter(item => item.id !== id);

    setPost(postFilter);
  }
  return (
    <PostContext.Provider value={{ post, addPost, deletePost }}>
      {children}
    </PostContext.Provider>
  )
}

export const usePost = () => useContext(PostContext);