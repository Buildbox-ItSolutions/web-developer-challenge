import { CreatePost } from './components/CreatePost'
import { Header } from './components/Header'
import { AppContainer } from './style'

export function App() {
  return (
    <AppContainer>
      <Header />
      <CreatePost />
    </AppContainer>
  )
}
