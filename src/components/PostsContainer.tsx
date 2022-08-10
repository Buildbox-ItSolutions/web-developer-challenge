import React, { Dispatch, memo, SetStateAction, useCallback } from "react";
import styled from "styled-components";
import { PostType } from "../types/PostType";
import PostCard from "./PostCard";

const Wrapper = styled.div`
  width: 516px;

  @media (max-width: 769px) {
    width: 400px;
  }

  @media (max-width: 481px) {
    width: 300px;
  }

  @media (max-width: 320px) {
    width: 270px;
  }
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

type PostContainerProps = {
  posts: PostType[];
  setPosts: Dispatch<SetStateAction<PostType[] | null>>;
};

const PostsContainer = memo(({ posts, setPosts }: PostContainerProps) => {
  const deletePost = useCallback(
    (id: number) => {
      const newPosts = posts.filter((post) => post.id !== id);
      if (newPosts.length) {
        const postWithNewIds = newPosts.map((post, index) => ({
          ...post,
          id: index,
        }));
        setPosts(postWithNewIds);
      }
      setPosts(newPosts);
    },
    [posts]
  );

  const renderCards = useCallback(() => {
    const cards = posts.map((post) => {
      const { id, name, imageURL, message } = post;
      return (
        <PostCard
          key={id}
          id={id}
          imageURL={imageURL}
          name={name}
          message={message}
          deletePost={deletePost}
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
});

PostsContainer.displayName = "PostsContainer";

export default PostsContainer;
