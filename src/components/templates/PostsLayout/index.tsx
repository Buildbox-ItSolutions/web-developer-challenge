import { Container, Body } from "./styles";
import { TopBar } from "../../molecules";
interface PostsLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const PostsLayout = ({ children }: PostsLayoutProps) => {
  return (
    <Container>
      <TopBar />
      <Body>{children}</Body>
    </Container>
  );
};
