import GlobalStyles from './styles/GlobalStyles.ts'
import Header from './components/header/Header.tsx'
import NewPost from './components/newPost/NewPost.tsx'
import Feed from './components/feed/Feed.tsx'
import Footer from './components/footer/Footer.tsx'

function App() {

  
  return (
    <>
      <GlobalStyles />
      <Header />
      <NewPost />
      <Feed />
      <Footer />
    </>
  )
}

export default App
