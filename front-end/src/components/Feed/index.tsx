import React from "react";
import ContentCard from "../ContentCard";
import { Container, FeedLabel } from "./styles";

function Feed() {
  return (
    <Container>
      <FeedLabel>Feed</FeedLabel>
      <ContentCard />
    </Container>
  );
}

export default Feed;
