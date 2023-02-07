import React from 'react'

/** components */

/* components */
import Header from './components/Header'
import Container from './components/Container'
import AddPost from './components/AddPost'

function App() {
  return (
    <>
      <Header />
      <Container>
        <AddPost></AddPost>
      </Container>
    </>
  )
}

export default App
