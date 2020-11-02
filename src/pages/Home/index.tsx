import React from "react";
import CreatePostCard from "../../components/CreatePostCard";
import PostCard from "../../components/PostCard";
import { AppHome, FeedHeader } from "./styles";

const Home = () => {
  return (
    <AppHome>
      <CreatePostCard />
      <FeedHeader>
        <p>Feed</p>
      </FeedHeader>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </AppHome>
  );
};

export default Home;
