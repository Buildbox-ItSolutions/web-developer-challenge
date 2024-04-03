import { useState } from "react";
import { IPost } from "./interfaces";
import { PostsList } from "./components/PostList";
import { GlobalStyle, PostMain } from "./style";
import { Header } from "./components/Header";

const App: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [photo, setPhoto] = useState('');

  const handleAddPost = () => {
    const newPost: IPost = {
      id: Date.now(),
      name,
      message,
      photo,
    };
    setPosts([...posts, newPost]);
    setName('');
    setMessage('');
    setPhoto('');
  };

  const handleRemovePost = (id: number) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <PostMain>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input
            type="text"
            placeholder="URL da Foto"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <button onClick={handleAddPost}>Adicionar Post</button>
          <PostsList posts={posts} onRemove={handleRemovePost} />
      </PostMain>
    </>
  );
};

export default App;
