import { useContext } from "react";
import Posts from "../Posts";
import { FeedContainer, PostsContainer } from "./style";
import { PostsContext } from "../../context/PostsContext";
import { deletePost } from "./service";

const Feed = ({
  createdPost,
}: {
  createdPost: number|null
}) => {
  const { posts, setPosts } = useContext(PostsContext);

  return (
    <FeedContainer>
      <h1>Feed</h1>
      <PostsContainer>
        <Posts posts={posts} setPosts={setPosts} deletePost={deletePost} createdPost={createdPost} />
      </PostsContainer>
    </FeedContainer>
  )
}

export default Feed;