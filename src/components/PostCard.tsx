import React from "react";
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
  grid-template-columns: 120px 340px;
  box-sizing: border-box;
  position: relative;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
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
  word-wrap: break-word;
  hyphens: auto;
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
  word-wrap: break-word;
  hyphens: auto;
`;

const PostInfo = styled.div``;

type PostCardType = {
  imageURL: string;
  name: string;
  message: string;
};

const PostCard = ({ imageURL, name, message }: PostCardType) => {
  return (
    <Wrapper>
      <PostImage src={imageURL} />
      <PostInfo>
        <FeedMessage>{message}</FeedMessage>
        <OwnerHeader>Enviado por</OwnerHeader>
        <FeedOwner>{name}</FeedOwner>
      </PostInfo>
    </Wrapper>
  );
};

export default PostCard;
