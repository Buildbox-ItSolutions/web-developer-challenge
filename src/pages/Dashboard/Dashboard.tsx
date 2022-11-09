import React, { useState } from 'react'

import Card from '../../components/Card'
import { Container, PostParams, Wrapper } from '.'
import Feed from './templates/Feed'
import Form from './templates/Form'

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
    <Wrapper>
      <Container>
        <Card mt="40px" width="calc(100% - 48px)">
          <Form addPost={handleAddPost} />
        </Card>

        {posts.length >= 1 && (
          <Feed posts={posts} deletePost={handleDeletePost} />
        )}
      </Container>
    </Wrapper>
  )
}

export default Dashboard
