import { useEffect, useState } from "react";
import Form from "../../components/Form/Form"
import Header from "../../components/Header/Header"
import Post from "../../components/Post/Post"
import { getAllPosts } from "../../services/posts/postServices";

import { Main as StyleMain } from './Feed-style';
import { IPost } from "../../Interfaces/IPost";

function App() {

  const [posts, setPosts] = useState<IPost[]>([]);
  const [test] = useState('');

  useEffect(() => {
    const getPosts = getAllPosts();
    setPosts(getPosts);
  }, []);


  function updatePosts(newPost: IPost) {
    setPosts(prevPosts => [...prevPosts, newPost]);
  }


  return (
    <StyleMain>
      <Header />
      <Form onSend={updatePosts} />

      <section>
        <h2>Feed</h2>
        { posts.length == 0 && "Nenhum post"}

        { posts.length > 0 && (
          posts.map((post, index) => (
            <Post key={index} data={post} />
          ))
        )}
      </section>

    </StyleMain>
  )
}

export default App
