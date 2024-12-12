"use client"
import { IPost } from "@/interfaces/post.interface";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface IPostProvidersProps {
    children: ReactNode;
}

export interface IPostContext {
    listPost: IPost[]
    setListPost:  Dispatch<SetStateAction<IPost[]>>
    addPost: (newPost: IPost) => void
    deletePost: (id: Date) => void
}

export const PostContext = createContext<IPostContext>({} as IPostContext); 

export const PostProvider = ({ children }: IPostProvidersProps) => {

    const [listPost, setListPost] = useState<IPost[]>([])

    const addPost = (newPost: IPost) => {
        setListPost([newPost, ...listPost])
    }

    const deletePost = (id: Date) => {
        const filterPost = listPost.filter((post: IPost) => post.id !== id)
        setListPost(filterPost)
    }

    return (
        <PostContext.Provider value={{
            listPost,
            setListPost,
            addPost,
            deletePost
        }}>
            {children}
        </PostContext.Provider>
    )
}