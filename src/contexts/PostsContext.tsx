/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { Posts } from "../interface";

interface IContext {
  posts: Posts[];
  setPosts: React.Dispatch<React.SetStateAction<Posts[]>>;
  deletePost: (position: number) => void
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

  const deletePost = (position: number) => {
    const filteredPosts = posts.filter((post, index) => index !== position);

    setPosts(filteredPosts);

    localStorage.setItem('posts', JSON.stringify(filteredPosts));
  };

  const contextValue: IContext = {
    posts,
    setPosts,
    deletePost,
  }
  
  return (
    <PostsContext.Provider value={contextValue}>
      {children}
    </PostsContext.Provider>
  )

}