import GlobalStyle from './styles/global'
import { Header } from './components/Header'
import { PostFeed } from './components/PostFeed'

function App() {
  return (
    <div>
      <Header />
      <PostFeed />
      <GlobalStyle />
    </div>
  )
}

export default App
