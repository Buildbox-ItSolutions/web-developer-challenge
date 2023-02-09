import React from 'react'

/** components */

/* components */
import Header from './components/Header'
import Container from './components/Container'
import AddPost from './components/AddPost'
import FeedArea from './components/FeedArea'

function App() {
  return (
    <>
      <Header />
      <Container>
        <AddPost></AddPost>
        <FeedArea />
      </Container>
    </>
  )
}

export default App
