import { CreatePost } from './components/CreatePost'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { AppContainer } from './style'

export function App() {
  return (
    <AppContainer>
      <Header />
      <CreatePost />
      <h2>Feed</h2>
      <Post
        img="https://avatars.githubusercontent.com/u/43791636?v=4"
        author="Pedro Henrique"
        text="lofpaojdfoiahiof fadhsoifahsdiouf ofaidhfioahsdfiouahs fiasdbfjasb fakj"
      />
    </AppContainer>
  )
}
