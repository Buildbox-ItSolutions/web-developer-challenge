import React, { useState } from 'react'
import Card from '../../components/Card'
import { Container, PostParams } from '.'
import Form from './templates/Form'
import Feed from './templates/Feed'

const Dashboard = () => {
  const [posts, setPosts] = useState<PostParams[]>([])

  const handleAddPost = (post: PostParams) => {
    setPosts((prevState) => [post, ...prevState])
  }

  const handleDeletePost = (uuid: string) => {
    const postsFiltered = posts.filter((post) => post.uuid !== uuid)
    setPosts(postsFiltered)
  }

  return (
    <Container>
      <Card mt="40px">
        <Form addPost={handleAddPost} />
      </Card>

      {posts.length >= 1 && (
        <Feed posts={posts} deletePost={handleDeletePost} />
      )}
    </Container>
  )
}

export default Dashboard
