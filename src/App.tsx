import GlobalStyles from './global-styles.ts'
import Header from './components/header/Header.tsx'
import NewPost from './components/newPost/NewPost.tsx'
import Feed from './components/feed/Feed.tsx'

function App() {
  const posts = [
    {
      id: "1",
      name: "Nome do Usuário",
      message: "Mensagem do post",
    },
    {
      id: "2",
      name: "Nome do Usuário",
      message: "Mensagem do post",
    },
    {
      id: "3",
      name: "Nome do Usuário",
      message: "Mensagem do post",
    }
  ]

  return (
    <>
      <GlobalStyles />
      <Header />
      <NewPost />
      <Feed props={posts} />
    </>
  )
}

export default App
