import React, { useContext } from "react";

import ContentCard from "../ContentCard";
import { Container, FeedLabel } from "./styles";
import { FeedContext } from "../../contexts/FeedContext";

function Feed() {
  const {feed} = useContext(FeedContext)

  return (
    <Container>
      <FeedLabel>Feed</FeedLabel>
      {feed.map((content, index) => (
        <ContentCard
          key={index}
          author={content.author}
          message={content.message}
          image={content.image}
        />
      ))}
    </Container>
  );
}

export default Feed;
