import { PostsData } from "../../context/PostsContext"

export const deletePost = (
  id: number, 
  posts: PostsData[], 
  setPosts: React.Dispatch<React.SetStateAction<PostsData[]>>,
  ) => {
  const updatePosts = posts.filter((post) => {
    if (post.id !== id) {
      return post;
    }
  })
  setPosts(updatePosts)
}
