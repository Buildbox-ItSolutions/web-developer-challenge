import Posts from "../Posts";
import { FeedContainer } from "./style";

const Feed = () => {
  return (
    <FeedContainer>
      <h1>Feed</h1>
      <Posts />
      <Posts />
      <Posts />
    </FeedContainer>
  )
}

export default Feed;