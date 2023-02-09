import React, { useContext } from 'react'

/* components */
import AddPost from '../components/AddPost'
import Container from '../components/Container'
import FeedArea from '../components/FeedArea'
import Header from '../components/Header'
import Post from '../components/Post'

/* context */
import { PostContext } from '../context/PostContext'

const Home = () => {
  const { posts } = useContext(PostContext)

  return (
    <>
      <Header />
      <Container>
        <AddPost />
        <FeedArea>
          {posts.map((item, indice) => {
            return (
              <Post
                name={item.nameOfPost}
                message={item.messageOfPost}
                figure={item.figureOfPost}
                id={indice}
                key={indice}
              />
            )
          })}
        </FeedArea>
      </Container>
    </>
  )
}

export default Home
