import Cards from './components/cards/Cards'
import FormPost from './components/form/FormPost'
import Header from './components/header/Header'
import { useNewPost } from './hooks/useNewPost';
import './Styles/App.css'

function App() {
  const {posts, newPost} = useNewPost();

  return (
    <>
      <Header />
      <FormPost onAddPost={newPost} />
      <Cards posts={posts} />
    </>
  )
}

export default App
