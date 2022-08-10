import React, { useCallback } from "react";
import styled from "styled-components";
import { PostType } from "../types/PostType";
import PostCard from "./PostCard";

const Wrapper = styled.div`
  width: 516px;
`;

const FeedHeader = styled.span`
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #7a7a7a;
`;

const PostsContainer = ({ posts }: { posts: PostType[] }) => {
  const renderCards = useCallback(() => {
    const cards = posts.map((post, index) => {
      const { name, imageURL, message } = post;
      const src = "data:image/png;base64," + imageURL;
      return (
        <PostCard
          key={`${index}-${name}`}
          imageURL={src}
          name={name}
          message={message}
        />
      );
    });

    return cards;
  }, [posts]);

  return (
    <Wrapper>
      <FeedHeader>Feed</FeedHeader>
      {renderCards()}
    </Wrapper>
  );
};

export default PostsContainer;
