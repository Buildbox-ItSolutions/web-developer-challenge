import { createContext, ReactNode, useState } from 'react'
import { Dispatch, SetStateAction } from 'react'

type Post = {
    name: string
    message: string
    photo?: any
}
type ContextType = {
    posts: Post[],
    setPosts?: Dispatch<SetStateAction<Post[]>>
}
type PostsProviderProps = {
    children: ReactNode
}

export const PostsContext = createContext<ContextType>({posts: []})

export const PostsProvider = ({ children }: PostsProviderProps) => {
    const [posts, setPosts] = useState<Post[]>([])

    return (
        <PostsContext.Provider value={{posts, setPosts}}>
            {children}
        </PostsContext.Provider>
    )
}