import GlobalStyles from './global-styles.ts'
import Header from './components/header/Header.tsx'
import NewPost from './components/newPost/NewPost.tsx'
import Feed from './components/feed/Feed.tsx'

function App() {
  const posts = [
    {
      id: "1",
      name: "Manuela Oliveira",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.",
    },
    {
      id: "2",
      name: "Nome do Usuário",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis.",
    },
    {
      id: "3",
      name: "Nome do Usuário",
      message: "Loren nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.",
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
