import React from "react";

// COMPONENTS
import CreatePost from "../CreatePost";
import FeedPost from "../FeedPost";
// STYLES
import Container from "./style";

const BoxBoy = () => {
  return (
    <Container>
      <CreatePost />
      <FeedPost />
    </Container>
  );
};

export default BoxBoy;
