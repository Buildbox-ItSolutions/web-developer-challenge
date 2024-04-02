import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import NewPost from "./components/NewPost/NewPost";
import { useState } from "react";
import Feed from "./components/Feed/Feed";

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  overflow-x: hidden;
`;

export interface IPost {
  img: string;
  name: string;
  content: string;
  id: string;
}

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);

  const handleAddPost = (post: IPost) => {
    if (!post.content) {
      return window.alert("Conteudo está faltando!");
    }
    if (!post.img) {
      return window.alert("Imagem está faltando!");
    }
    if (!post.name) {
      return window.alert("Nome está faltando!");
    }
    setPosts([...posts, post]);
  };

  const handleRemovePost = (post: IPost) => {
    const newState = [...posts].filter((arrayPost) => arrayPost.id !== post.id);
    setPosts([...newState]);
  };

  return (
    <StyledApp>
      <NavBar />
      <NewPost handleAddPost={handleAddPost} />
      <Feed posts={posts} handleRemovePosts={handleRemovePost} />
    </StyledApp>
  );
}

export default App;
