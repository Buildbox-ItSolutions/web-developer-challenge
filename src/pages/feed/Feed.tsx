import Form from "../../components/Form/Form"
import Header from "../../components/Header/Header"
import Post from "../../components/Post/Post"
import { getAllPosts } from "../../services/posts/postServices";

import { Main as StyleMain } from './Feed-style';

function App() {

  const posts = getAllPosts();

  return (
    <StyleMain>
      <Header />
      <Form />

      <section>
        <h2>Feed</h2>
        { posts.length == 0 && "Nenhum post"}
        { posts.length > 0 && <Post data={posts} />}
      </section>

    </StyleMain>
  )
}

export default App
