import { createContext, useContext, useState } from 'react'

interface IPost {
    name: string;
    message: string;
    postPhoto: string;
}

interface IPostContext {
    addPost: (post: IPost) => void;
    posts: IPost[]
}

const postContext = createContext<IPostContext | null>(null)

export function PostContextProvider( { children } : { children: React.ReactNode } ) {
    const [posts, setPosts] = useState<IPost[]>([])

    function addPost(post: IPost) {
        setPosts(prev => [...prev, post])
    }

    return <postContext.Provider value={{addPost, posts}}>
        {children}
    </postContext.Provider>
}

export function usePostContext() {
    return useContext(postContext) as IPostContext
}