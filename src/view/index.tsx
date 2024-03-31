import { Feed } from "./components/feed";
import { Header } from "./components/header";
import { NewPostInput } from "./components/new";
import { Container } from "./styles";

export function Main() {
  return (
    <Container>
      <Header />
      <div className="wrapper">
        <NewPostInput />
        <Feed />
      </div>
    </Container>
  );
}
