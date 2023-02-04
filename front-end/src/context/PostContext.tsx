import { createContext, useEffect, useState } from "react";
import { IPostData } from "../interfaces";
import { createPost, deletePost, getAllPosts } from "../services/api";

interface IProvider {
  children: JSX.Element
}

interface IContext {
  creatingPost: (author: string, message: string) => void;
  deletingPost: (id: string) => void;
  fetchPostData: () => void;
  posts: IPostData[] | undefined
}


export const PostContext = createContext<IContext>({} as IContext);

export const PostProvider = ({ children }: IProvider) => {

  const [posts, setPosts] = useState<IPostData[]>();


  const fetchPostData = () => {
    (async () => {
      try {
        const responsePostData = await getAllPosts();
        responsePostData.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1)
        setPosts(responsePostData)
      } catch (error) {
        console.log(error)
      }
    })()
  }

  const creatingPost = async (author: string, message: string) => {
    await createPost(author, message)
    fetchPostData();
  }

  const deletingPost = async (id: string) => {
    await deletePost(id)
    fetchPostData();
  }

  useEffect(fetchPostData, [])

  return (
    <PostContext.Provider value={{ creatingPost, fetchPostData, deletingPost, posts }}>
      {children}
    </PostContext.Provider>
  )
}
