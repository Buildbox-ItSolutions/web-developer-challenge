import Cards from './components/cards/Cards'
import FormPost from './components/form/FormPost'
import Header from './components/header/Header'
import { useHandlePosts } from './hooks/useHandlePosts';
import './Styles/App.css'

function App() {
  const {posts, newPost, removePost} = useHandlePosts();

  return (
    <>
      <Header />
      <FormPost onAddPost={newPost} />
      <Cards posts={posts} onRemovePost={removePost} />
    </>
  )
}

export default App
