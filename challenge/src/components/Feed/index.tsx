import { useContext } from "react";
import Posts from "../Posts";
import { FeedContainer } from "./style";
import { PostsContext } from "../../context/PostsContext";
import { deletePost } from "./service";

const Feed = () => {
  const { posts, setPosts } = useContext(PostsContext);

  return (
    <FeedContainer>
      <h1>Feed</h1>
      <Posts posts={posts} setPosts={setPosts} deletePost={deletePost} />
    </FeedContainer>
  )
}

export default Feed;