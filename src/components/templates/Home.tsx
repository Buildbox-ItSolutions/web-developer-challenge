import React from 'react'
import Header from '../molecules/Header'
import Post from '../organisms/Post'
import PostForm from '../organisms/PostForm'

const Home = () => {
  return (
    <>
      <Header />
      <PostForm />
      <Post />
    </>
  )
}

export default Home