import React from 'react'

/** components */

/* components */
import Header from './components/Header'
import Container from './components/Container'
import AddPost from './components/AddPost'
import FeedArea from './components/FeedArea'

/* context */
import { PostProvider } from './context/PostContext'

function App() {
  return (
    <>
      <PostProvider>
        <Header />
        <Container>
          <AddPost></AddPost>
          <FeedArea />
        </Container>
      </PostProvider>
    </>
  )
}

export default App
