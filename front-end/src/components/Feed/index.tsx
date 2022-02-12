import React from "react";
import ContentCard from "../ContentCard";
import { Container, FeedLabel } from "./styles";
import jsonData from "../../utils/data/contents.json";

function Feed() {
  return (
    <Container>
      <FeedLabel>Feed</FeedLabel>
      {jsonData.map((content) => (
        <ContentCard
          key={content._id}
          author={content.author}
          message={content.message}
          imageName={content.imageName}
        />
      ))}
    </Container>
  );
}

export default Feed;
