// import { useContext } from 'react'

// import PostsContext from '../../../shared/contexts/posts'
import PostCard from '../PostCard'
import { FeedContainer } from './style'

export default function Feed() {
  // const { posts, setPosts } = useContext(PostsContext)

  return (
    <FeedContainer>
      <div className="titleArea">
        <h1>Feed</h1>
      </div>
      <PostCard />
    </FeedContainer>
  )
}
