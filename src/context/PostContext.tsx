import { createContext, ReactNode, useContext, useState } from "react";

interface IPostProvider {
  children: ReactNode;
}

interface IPostData {
  id: number;
  name: string;
  message: string;
  img: string;
}

interface IOnAddPost {
  img: string;
  name: string;
  message: string;
}

interface IPostContextData {
  post: IPostData[];
  onDeletePost: (id: number) => void;
  onAddPost: ({img, message, name}: IOnAddPost) => void;
}

const PostContext = createContext({} as IPostContextData);

export function PostProvider({ children }: IPostProvider) {

  const [post, setPost] = useState<IPostData[]>([])

  function onDeletePost(id: number) {
    const postFiltered = post.filter(a => a.id !== id);

    setPost(postFiltered)
  }

  function onAddPost({ img, message, name }: IOnAddPost) {
    const data = {
      id: post.length,
      name,
      message,
      img
    }

    setPost(state => [...state, data])
  }

  return (
    <PostContext.Provider value={{ post, onAddPost, onDeletePost }}>
      {children}
    </PostContext.Provider>
  )
}

export const usePost = () => useContext(PostContext)