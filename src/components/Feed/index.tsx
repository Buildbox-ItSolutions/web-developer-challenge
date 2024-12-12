import { usePost } from '../../contexts/PostContext'
import { Post } from '../Post'
import { FeedContainer, Title } from './styles'

export function Feed() {
  const { posts } = usePost()

  return (
    <>
      <Title>Feed</Title>
      <FeedContainer>
        {posts.length !== 0 &&
          posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              username={post.username}
              name={post.name}
              message={post.message}
            />
          ))}
      </FeedContainer>
    </>
  )
}
