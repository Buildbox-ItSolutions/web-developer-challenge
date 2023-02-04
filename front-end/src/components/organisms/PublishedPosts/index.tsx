import React, { useContext } from 'react'
import { PostContext } from '../../../context/PostContext'
import Post from '../Post'
import { Container, Title } from './styles'


const PublishedPosts: React.FC = () => {

  const { posts } = useContext(PostContext)

  return (
    <Container>
      <Title>Feed</Title>
      {posts?.map((data) => {
        return (
          <Post
            key={data.id}
            id={data.id}
            name={data.name}
            post={data.post}
            createdAt={data.createdAt} />
        )
      })}
    </Container>
  )
}

export default PublishedPosts