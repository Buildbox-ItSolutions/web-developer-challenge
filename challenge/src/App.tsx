import { useState } from "react"
import Feed from "./components/Feed"
import Header from "./components/Header"
import PostCreation from "./components/PostCreation"
import { PostsProvider } from "./context/PostsContext"

function App() {
  const [createdPost, setCreatedPost] = useState<number|null>(null)

  return (
    <>
      <PostsProvider>
        <Header />
        <PostCreation setCreatedPost={setCreatedPost} />
        <Feed createdPost={createdPost} />
      </PostsProvider>
    </>
  )
}

export default App
