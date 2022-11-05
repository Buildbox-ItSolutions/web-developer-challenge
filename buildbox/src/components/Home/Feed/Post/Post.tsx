import { PostContent } from "./PostContent/PostContent";
import { PostHeader } from "./PostHeader/PostHeader";
import { PostContainer } from "./Styles/PostContainer.styled";

export const Post = () => {
  return (
    <>
      <PostContainer>
        <PostHeader></PostHeader>
        <PostContent></PostContent>
      </PostContainer>
    </>
  );
};
