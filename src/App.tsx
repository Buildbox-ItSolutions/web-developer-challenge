import React from 'react'

/* pages */
import Home from './pages/Home'

/* context */
import { PostProvider } from './context/PostContext'

function App() {
  return (
    <>
      <PostProvider>
        <Home />
      </PostProvider>
    </>
  )
}

export default App
