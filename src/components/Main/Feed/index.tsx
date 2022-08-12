import { useContext } from 'react'

import PostsContext from '../../../shared/contexts/posts'
import Spinner from '../../Spinner'
import PostCard from '../PostCard'
import { FeedContainer } from './style'

export default function Feed() {
  const { posts } = useContext(PostsContext)

  if (!posts) {
    return (
      <FeedContainer>
        <div className="titleArea">
          <h1>Feed</h1>
        </div>
        <div style={{ margin: '2rem 0' }}>
          <Spinner />
        </div>
      </FeedContainer>
    )
  } else {
    return (
      <FeedContainer>
        <div className="titleArea">
          <h1 className="title">Feed</h1>
        </div>
        {posts.length === 0 ? (
          <h1 className="noContent">Nenhuma publicação encontrada...</h1>
        ) : (
          posts.map((post) => {
            return <PostCard key={post.id} post={post} />
          })
        )}
      </FeedContainer>
    )
  }
}
