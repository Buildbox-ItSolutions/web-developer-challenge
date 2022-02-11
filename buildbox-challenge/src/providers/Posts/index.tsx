import { createContext, ReactNode,  useState } from "react";

interface PostProviderProps{
    children:ReactNode
}
interface PostProviderData{
    posts:Post[] | Storage,
    addPost: (póst:Post) => void
}

interface Post{
    name:string,
    message:string,
    image?:string,
}

export const PostContext = createContext <PostProviderData>({} as PostProviderData)

export const PostProvider = ({ children }: PostProviderProps) =>{

    const [posts, setPosts] = useState<Post[]>(()=>{
        
        if (JSON.parse(localStorage.getItem("posts") as string) ){
            const postsStoraged = JSON.parse(localStorage.getItem("posts") as string) 
            return postsStoraged
        }
        return []
    })

    const addPost = (post:Post) =>{
        setPosts([...posts, post])
        const allPosts = JSON.parse(localStorage.getItem("posts") as string) || []
        allPosts.push(post)
        localStorage.setItem("posts", JSON.stringify(allPosts))
    }
  
    return(
        <PostContext.Provider value={{ addPost, posts }}>
            { children }
        </PostContext.Provider>
    )
}