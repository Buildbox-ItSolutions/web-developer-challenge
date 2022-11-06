import { ImgContainer as UserImage } from "../../../Styles/ImgContainer.styled";
import { PostMessage } from "./Message/PostMessage";
import { Container } from "./Styles/Container.styled";

export const PostContent = () => {
  const imagePath = "";
  return (
    <>
      <Container>
        <UserImage filePath={imagePath}></UserImage>
        <PostMessage></PostMessage>
      </Container>
    </>
  );
};
