import { useState } from "react";

import { FormPost } from "../../components/FormPost";
import { Header } from "../../components/Header";
import { ListPosts } from "../../components/ListPosts";
import { Container } from "./styles";

export interface IPost {
  id?: string;
  photo: string;
  name: string;
  message: string;
}

export const Dashboard = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  return (
    <Container>
      <Header />
      <FormPost data={{ posts, setPosts }} />
      <ListPosts data={{ posts, setPosts }} />
    </Container>
  );
};
