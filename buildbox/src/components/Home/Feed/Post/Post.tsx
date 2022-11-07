import { useState } from "react";
import { PostContent } from "./PostContent/PostContent";
import { PostHeader } from "./PostHeader/PostHeader";
import { PostContainer } from "./Styles/PostContainer.styled";

export const Post = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <PostContainer expanded={expanded}>
        <PostHeader setExpanded={setExpanded}></PostHeader>
        <PostContent></PostContent>
      </PostContainer>
    </>
  );
};
