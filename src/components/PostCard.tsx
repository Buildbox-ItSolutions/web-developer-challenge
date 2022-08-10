import React, { memo } from "react";
import styled from "styled-components";
import PostImage from "./PostImage";

const Wrapper = styled.div`
  width: 516px;
  padding: 56px 24px 32px;
  margin: 8px 0;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  display: grid;
  grid-template-columns: 120px 348px;
  box-sizing: border-box;
  position: relative;
  overflow-wrap: break-word;

  @media (max-width: 769px) {
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 481px) {
    width: 300px;
  }

  @media (max-width: 320px) {
    width: 270px;
  }
`;

const FeedMessage = styled.div`
  display: block;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  width: 100%;
  overflow-wrap: break-word;

  @media (max-width: 769px) {
    text-align: center;
    margin-top: 24px;
  }
`;

const OwnerHeader = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.29px;
  text-align: left;
  color: #5f5f5f;
  margin-top: 24px;
`;

const FeedOwner = styled.div`
  display: block;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #7a7a7a;
  width: 100%;
  overflow-wrap: break-word;
`;

const DeletePost = styled.img`
  position: absolute;
  top: 12px;
  right: 12px;
`;

type PostCardProps = {
  id: number | undefined;
  imageURL: string;
  name: string;
  message: string;
  deletePost: Function;
};

const PostCard = memo(
  ({ id, imageURL, name, message, deletePost }: PostCardProps) => {
    return (
      <Wrapper aria-label={`post-${id}`}>
        <DeletePost
          src="/delete.svg"
          alt="delete-post"
          onClick={() => deletePost(id)}
        />
        <PostImage src={imageURL} />
        <div style={{ width: "100%" }}>
          <FeedMessage>{message}</FeedMessage>
          <OwnerHeader>Enviado por</OwnerHeader>
          <FeedOwner>{name}</FeedOwner>
        </div>
      </Wrapper>
    );
  }
);

PostCard.displayName = "PostCard";

export default PostCard;
