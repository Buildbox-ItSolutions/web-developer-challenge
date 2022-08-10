import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Logo from "./components/Logo";
import FormPost from "./components/FormPost";
import PostsContainer from "./components/PostsContainer";
import { PostType } from "./types/PostType";

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #343434;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-family: Roboto;
  box-sizing: border-box;
`;

const App = () => {
  const [posts, setPosts] = useState<PostType[] | null>(null);

  useEffect(() => {
    const posts = localStorage.getItem("posts");
    if (posts) setPosts(JSON.parse(posts));
  }, []);

  return (
    <Wrapper>
      <Header>
        <Logo />
      </Header>
      <FormPost />
      {posts && <PostsContainer posts={posts} />}
    </Wrapper>
  );
};

export default App;
