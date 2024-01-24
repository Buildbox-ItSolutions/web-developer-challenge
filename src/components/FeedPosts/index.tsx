import * as React from "react";
import { usePosts } from "../../hooks/usePosts";
import Card from "../Card";
import * as Feed from "./feed.styles";

const FeedPosts: React.FunctionComponent = () => {
  const { posts } = usePosts();

  return (
    <>
      <Feed.Container>
        <Feed.Title>Feed</Feed.Title>
        <Feed.CardList>
          {posts.length ? (
            posts.map((post) => <Card key={post.id} {...post} />)
          ) : (
            <Feed.EmptyCards>Nenhum Post ainda.</Feed.EmptyCards>
          )}
        </Feed.CardList>
      </Feed.Container>
    </>
  );
};

export default FeedPosts;
