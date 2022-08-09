import { useState } from "react";

import { FormPost } from "../../components/FormPost";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export interface IPost {
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
    </Container>
  );
};
