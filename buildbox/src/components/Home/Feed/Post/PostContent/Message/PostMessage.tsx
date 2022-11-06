import { useContext } from "react";
import { PostContext } from "../../../Feed";
import { Container } from "./Styles/Container.styled";
import { SentByLabel } from "./Styles/SentByLabel.styled";
import { SentByUserName } from "./Styles/SentByName.styled";
import { SentBySection } from "./Styles/SentBySection.styled";
import { TextSection } from "./Styles/TextSection.styled";

export const PostMessage = () => {
  const post: any = useContext(PostContext);

  return (
    <>
      <Container>
        <TextSection>{post.text}</TextSection>
        <SentBySection>
          <SentByLabel>Enviado por</SentByLabel>
          <SentByUserName>{post.userName}</SentByUserName>
        </SentBySection>
      </Container>
    </>
  );
};
