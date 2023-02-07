import React from 'react'

/** components */

/* components */
import Header from './components/Header'
import PostContainer from './components/PostContainer'
import Container from './components/Container'

function App() {
  return (
    <>
      <Header />
      <Container>
        <PostContainer>
          <p>Hellow orld</p>
        </PostContainer>
      </Container>
    </>
  )
}

export default App
