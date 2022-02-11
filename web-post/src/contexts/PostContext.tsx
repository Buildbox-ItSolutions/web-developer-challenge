import { createContext, useState, ReactNode, useContext } from "react";
import { ICreatePost } from "../pages/Home/dto/ICreatePost";

interface IPostContextProps {
  children: ReactNode;
}
interface IPostContextData {
  removePost(id: string): void;
  setPosts(any: any): void;
  posts: ICreatePost[];
}

export const PostContext = createContext({} as IPostContextData);

export function postContext() {
  return useContext(PostContext);
}

export function PostContextProvider({ children }: IPostContextProps) {
  const [posts, setPosts] = useState<ICreatePost[]>([]);

  const removePost = (id: string) => {
    const post = posts.filter((p) => p.id !== id);
    setPosts(post);
  };

  return (
    <PostContext.Provider value={{ posts, removePost, setPosts }}>
      {children}
    </PostContext.Provider>
  );
}
