import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import PostInput from './components/PostInput'
import PostsList from './components/PostsList'
import { PostProvider } from './context/usePost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <PostProvider>
        <PostInput />
        <PostsList />
      </PostProvider>
    </>
  )
}

export default App
