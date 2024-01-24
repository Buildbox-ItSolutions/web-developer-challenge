import FeedPosts from './components/FeedPosts'
import Forms from './components/Form'
import Header from './components/Header'
import { GlobalStyle } from './styles/GlobalStyle'

function App() {
  
  return (
    <>
    <main>
     <Header/>
     <Forms/>
     <FeedPosts/>
    </main>
  <GlobalStyle/>
    </>
  )
}

export default App
