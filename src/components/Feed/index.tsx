import React from "react";
import { Post } from "../";

import { Container } from "./styles";
import { usePostContext } from "../../store/PostContext";

const Feed: React.FC = () => {
  const { postsData } = usePostContext();

  return (
    <Container>
      <p className="feed-text">Feed</p>
      {postsData.map((post) => {
        return (
          <Post
            author={post.author}
            message={post.message}
            imgSource={post.imgSource}
            id={post.id}
            key={post.id}
          />
        );
      })}
    </Container>
  );
};

export default Feed;
