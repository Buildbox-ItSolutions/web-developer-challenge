import { useContext } from "react"
import { PostContext } from "../../providers/Posts"
import { Post } from "../Post"
import { FeedContainer } from "./style"


interface Post{
    name:string,
    message:string,
    image?:string,
}

export const Feed = () => {
  const { posts } = useContext(PostContext)
  return (
    <FeedContainer>
        <h4>Feed</h4>
        {posts.map((post:Post, index:number)=> <Post key={index} post={post}/>)}
    </FeedContainer>
  )
}
