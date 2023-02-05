import { useState } from "react";
import { Feed } from "../../components/Feed";
import { FormPost } from "../../components/FormPost";
import { Header } from "../../components/Header";
import { PostTypes } from "../../types/PostTypes";
import { Container } from "./styles";

export const Home = () => {
  const [posts, setPosts] = useState<PostTypes[]>([]);

  return (
    <Container>
      <Header />
      <FormPost setPosts={setPosts} posts={posts} />
      <Feed posts={posts} setPosts={setPosts} />
    </Container>
  );
};
