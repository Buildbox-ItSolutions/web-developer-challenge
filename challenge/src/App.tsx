import Feed from "./components/Feed"
import Header from "./components/Header"
import PostCreation from "./components/PostCreation"
import { PostsProvider } from "./context/PostsContext"

function App() {

  return (
    <>
      <PostsProvider>
        <Header />
        <PostCreation />
        <Feed />
      </PostsProvider>
    </>
  )
}

export default App
