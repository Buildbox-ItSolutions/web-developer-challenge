import GlobalStyles from './global-styles.ts'
import Header from './components/header/Header.tsx'
import NewPost from './components/newPost/NewPost.tsx'
import Feed from './components/feed/Feed.tsx'

function App() {

  
  return (
    <>
      <GlobalStyles />
      <Header />
      <NewPost />
      <Feed />
    </>
  )
}

export default App
