import GlobalStyles from './global-styles.ts'
import Header from './components/header/Header.tsx'
import NewPost from './components/newPost/NewPost.tsx'

function App() {

  return (
    <>
      <GlobalStyles />
      <Header />
      <NewPost />
    </>
  )
}

export default App
