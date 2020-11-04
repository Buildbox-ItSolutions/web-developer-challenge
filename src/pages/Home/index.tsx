import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CreatePostCard from "../../components/CreatePostCard";
import PostCard from "../../components/PostCard";
import { RootState } from "../../store/modules/types";
import { AppHome, FeedHeader } from "./styles";
import { indexPost } from "../../store/modules/posts/actions";
import { PostI } from "../../store/modules/types/Post";

const Home = () => {
  const dispatch = useDispatch();
  const posts:PostI[] = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(indexPost());
  }, [dispatch]);

  return (
    <AppHome>
      <CreatePostCard />
      <FeedHeader>
        <p>Feed</p>
      </FeedHeader>
      {posts.map((post) => (
        <PostCard {...post} key={post.id} />
      ))}
    </AppHome>
  );
};

export default Home;
