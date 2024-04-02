import { createContext, useContext, useState } from 'react'
import postPhoto from '../assets/photo-base.jpg'
import postPhoto2 from '../assets/photo-base2.jpg'
import { v4 as uuidv4 } from 'uuid';

export interface IPost {
    authorName: string;
    message: string;
    postPhoto: string;
    id: string;
}

interface IPostContext {
    addPost: (post: IPost) => void;
    deletePost: (postId: string) => void
    posts: IPost[]
}

const postContext = createContext<IPostContext | null>(null)

export function PostContextProvider( { children } : { children: React.ReactNode } ) {
    const [posts, setPosts] = useState<IPost[]>([
        {
            authorName: "Manuela Oliveira",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis.",
            postPhoto: postPhoto2,
            id: uuidv4()
        },
        {
            authorName: "Manuela Oliveira", 
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.", 
            postPhoto: postPhoto,
            id: uuidv4()
        }
    ])

    function addPost(post: IPost) {
        setPosts(prev => [...prev, post])
    }
    
    function deletePost(postId: string) {
        setPosts(prev => prev.filter(({id}) => id !== postId))
    }

    return <postContext.Provider value={{addPost, deletePost, posts}}>
        {children}
    </postContext.Provider>
}

export function usePostContext() {
    return useContext(postContext) as IPostContext
}