import PostCard from '../PostCard'
import { FeedContainer } from './style'

export default function Feed() {
  return (
    <FeedContainer>
      <div className="titleArea">
        <h1>Feed</h1>
      </div>
      <PostCard />
    </FeedContainer>
  )
}
