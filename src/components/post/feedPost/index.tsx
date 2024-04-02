"use client"
import { PostContext } from "@/context/PostContext"
import CardPost from "../cardPost"
import { TagFeed } from "./style"
import { IPost } from "@/interfaces/post.interface"
import { useContext } from "react"

const FeedPost = () => {
    const { listPost } = useContext(PostContext)
    return (
        <TagFeed>
            <h2>Feed</h2>
            <ul>
                {listPost.length > 0 ? (
                    listPost.map((post: IPost, index: number) => (
                        <CardPost 
                            key={index} 
                            id={post.id} 
                            name={post.name} 
                            content={post.content} 
                            image={post.image}
                        />
                    ))
                ) : (
                    <div className="default-card">
                        <h3>Nenhuma postagem adicionada!</h3>
                    </div>
                )}
            </ul>
        </TagFeed>
    )
}


export default FeedPost