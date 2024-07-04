import { ThemeProvider } from "styled-components";
import { Header } from "../components/header";
import { Container } from "./styles";
import { Form } from "../components/form";
import { List } from "../components/list";

export default function Posts() {
  return (
    <>
      <Header />
      <Container>
        <Form />
        <List />
      </Container>
    </>
  );
}
