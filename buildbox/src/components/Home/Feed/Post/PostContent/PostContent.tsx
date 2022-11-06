import { useContext } from "react";
import { PostContext } from "../../Feed";
import { PostMessage } from "./Message/PostMessage";
import { Container } from "./Styles/Container.styled";
import { UserImage } from "./Styles/UserImage.styled";

export const PostContent = () => {
  const { userImage }: any = useContext(PostContext);
  return (
    <>
      <Container>
        <UserImage filePath={userImage}></UserImage>
        <PostMessage></PostMessage>
      </Container>
    </>
  );
};
