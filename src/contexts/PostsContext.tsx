import { createContext, useEffect, useState } from "react";
import { Posts } from "../interface";

interface IContext {
  posts: Posts[];
  setPosts: React.Dispatch<React.SetStateAction<Posts[]>>;
}

interface IProvider {
  children: JSX.Element
}

export const PostsContext = createContext<IContext>({} as IContext);


export const PostProvider = ({children}: IProvider) => {
  const [posts, setPosts] = useState<Posts[]>([]);


  const savedPosts = localStorage.getItem("posts");

  useEffect(()=> {
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, [])

  const contextValue: IContext = {
    posts,
    setPosts,
  }
  
  return (
    <PostsContext.Provider value={contextValue}>
      {children}
    </PostsContext.Provider>
  )

}