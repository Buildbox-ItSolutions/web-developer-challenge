import React, {
    createContext,
    ReactNode,
    useState,
} from 'react'
import {v4 as uuidv4} from 'uuid';
import { Post } from '../../types/post'

type Context = {
    posts: Post[]
    addPost(post: Post): void
    removePost(post: Post): void
}

export const ProviderContext = createContext({} as Context)

const Provider = ({ children }: { children: ReactNode }) => {
    const [posts, setPosts] = useState<Post[]>([])

    const addPost = (post: Post) => {
        const generatedUuid = uuidv4()
        post.id = generatedUuid
        const clonePosts = [...posts, post]

        setPosts(clonePosts)
    }

    const removePost = (post: Post) => {
        const clonePosts = [...posts]
        let postsCopy = clonePosts.filter((clonePost) => clonePost.id !== post.id)
        setPosts(postsCopy)
    }

    return (
        <ProviderContext.Provider
            value={{
                posts,
                addPost,
                removePost
            }}
        >
            {children}
        </ProviderContext.Provider>
    )
}

export default Provider