import React, { useState } from 'react'
import Card from '../../components/Card'
import { Container, PostParams } from '.'
import Form from './templates/Form'
import Feed from './templates/Feed'

const Dashboard = () => {
  const [posts, setPosts] = useState<PostParams[]>([])

  const handleAddPost = (post: PostParams) => {
    setPosts((prevState) => [...prevState, post])
  }

  return (
    <Container>
      <Card mt="40px">
        <Form addPost={handleAddPost} />
      </Card>

      <Feed posts={posts} />
    </Container>
  )
}

export default Dashboard
