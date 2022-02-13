import React, { useContext, useEffect } from "react";

import ContentCard from "../ContentCard";
import { Container, FeedLabel } from "./styles";
import { FeedContext } from "../../contexts/FeedContext";
import { ContentCardProps, ContentDataSource } from "../../utils/interfaces";
import jsonData from "../../utils/data/contents.json";

function Feed() {
  const { feed, setFeed } = useContext(FeedContext);

  useEffect(() => {
    const initial = jsonData.map<ContentCardProps>(
      (content: ContentDataSource) => ({
        author: content.author,
        message: content.message,
        image: content.imageName,
      })
    );

    setFeed(initial);
  }, [setFeed]);

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
