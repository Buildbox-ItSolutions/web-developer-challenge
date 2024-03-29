import './app.css';
import './styles/global.css'

import { useState } from 'react';

import { postsProps } from './models';

import FeedCard from './components/FeedCard';
import FormularioFeed from './components/FormularioFeed';
import Header from './components/Header';

export const postsCreate = () => {
  const [posts, setPosts] = useState<postsProps[]>([]);

  const criarPost = (novoPost: postsProps) => {
    setPosts([...posts, novoPost]);
  };

  const removerPost = (index: number) => {
    const todosPosts = [...posts];
    todosPosts.splice(index, 1);
    setPosts(todosPosts);
  };

  return { posts, criarPost, removerPost };
};


function App() {
  const { posts, criarPost, removerPost } = postsCreate();

  return (
    <>
      <Header />
      <div className="conteudo">
        <FormularioFeed handleCriarPost={criarPost} />
        <main>
          <h1>Feed</h1>
          {posts.map((post, index) => (
            <FeedCard
              key={index}
              nome={post.nome}
              mensagem={post.mensagem}
              handleRemoverPost={() => removerPost(index)}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
