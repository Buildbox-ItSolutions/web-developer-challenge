import { CreatePostForm } from './components/create-post-form'
import { Feed } from './components/feed'
import { Header } from './components/header'
import { Container } from './styles'

export function App() {
  return (
    <Container>
      <Header />
      <CreatePostForm />
      <Feed />
    </Container>
  )
}
