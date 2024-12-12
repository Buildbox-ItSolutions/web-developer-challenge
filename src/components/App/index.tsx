import { PostsProvider } from '../../contexts/PostsContext'
import { Container } from './styles'

import { Header } from '../Header'
import { InsertFields } from '../InsertFields/index'
import { Feed } from '../Feed'

function App() {

  return (
    <PostsProvider>
      <Container>
        <Header />
        <InsertFields />
        <Feed />
      </Container>
    </PostsProvider>
  )
}

export default App;
