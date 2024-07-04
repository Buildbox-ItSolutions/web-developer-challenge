import { ThemeProvider } from "styled-components";
import { Header } from "../components/header";
import { Container } from "./styles";
import { Form } from "../components/form";
import { List } from "../components/list";
import { Post } from "../components/post";

export default function Posts() {
  return (
    <>
      <Header />
      <Container>
        <Form />
        <List>
          <Post
            // key={id}
            avatar="https://avatars.githubusercontent.com/u/44109917?v=4"
            name="Jhon Doe"
            message="Post Title"
          />
        </List>
      </Container>
    </>
  );
}
