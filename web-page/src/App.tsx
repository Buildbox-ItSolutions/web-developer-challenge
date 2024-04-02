import BodyContent from "./components/BodyConternt"
import FeedCard from "./components/FeedCard"
import Header from "./components/Header"
import PostCard from "./components/PostCard"
import { GlobalStyles } from "./styles/GlobalStyles"

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <BodyContent>
        <PostCard />
        <FeedCard />
      </BodyContent>
    </>
  )
}
