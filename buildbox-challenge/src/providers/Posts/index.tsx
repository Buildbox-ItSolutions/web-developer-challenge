import { useContext } from "react";
import { createContext, ReactNode,  useState } from "react";
import { ModalDeleteContext } from "../ModelDeletePost";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'
interface PostProviderProps{
    children:ReactNode
}

interface PostProviderData{
    posts:Post[] | Storage,
    addPost: (póst:Post) => void,
    removePost:  (id:number) => void 
}

interface Post{
    name:string,
    message:string,
    image?:string,
    id?:number
}

export const PostContext = createContext <PostProviderData>({} as PostProviderData)

export const PostProvider = ({ children }: PostProviderProps) =>{

    const { settingShowingModalDeleted } = useContext(ModalDeleteContext)
    const [posts, setPosts] = useState<Post[]>(()=>{
        
        if (JSON.parse(localStorage.getItem("posts") as string) ){
            const postsStoraged = JSON.parse(localStorage.getItem("posts") as string) 
            return postsStoraged
        }
        return []
    })

    const addPost = (post:Post) =>{
        toast.configure()
        const allPosts = JSON.parse(localStorage.getItem("posts") as string) || []
        post.id = allPosts.length + 1
        setPosts([...posts, post])
        allPosts.push(post)
        localStorage.setItem("posts", JSON.stringify(allPosts))

        toast.success("Post adicionado com sucesso!")
    }
    
    const removePost = (id:number) =>{
        const allPosts = JSON.parse(localStorage.getItem("posts") as string)
        const newPosts = allPosts.filter((post:Post) => post.id !== id)
        setPosts([...newPosts])
        localStorage.setItem("posts", JSON.stringify(newPosts))
        settingShowingModalDeleted()
        toast.configure()
        toast.success("Post deletado com sucesso!")
    }
    return(
        <PostContext.Provider value={{ addPost, posts, removePost }}>
            { children }
        </PostContext.Provider>
    )
}