import Form from "../../components/Form/Form"
import Header from "../../components/Header/Header"
import Post from "../../components/Post/Post"

import { Main as StyleMain } from './Feed-style';

function App() {

  return (
    <StyleMain>
      <Header />
      <Form />

      <section>
        <h2>Feed</h2>
        <Post />
      </section>

    </StyleMain>
  )
}

export default App
