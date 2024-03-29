// Home.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts, selectPosts } from "../storage/postReducers";
import { getPosts } from "../api/fetchApi";
import { PostInterface } from "../api/postInterface";
import { Postadd } from "../components/Postadd";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();

        console.log(response);

        const data: PostInterface[] = await response.data;

        dispatch(setPosts(data.reverse()));
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, [dispatch]);

  return (
    <main className="main-container">
      <header></header>
      <div className="container">
        <Postadd />
        {posts.map((post) => (
          <div className="posts-itens" key={post.id}>
            <img className="photo-base" src={post.imagem} alt={post.nome} />
            <div className="post-itens-text">
              <p className="text-message">{post.mensagem}</p>
              <span className="text-sender">Enviado por:</span>
              <h2 className="text-name">{post.nome}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
