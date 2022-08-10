import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 36px;
  border: solid 1px #4b4b4b;
  background-color: rgba(75, 75, 75, 0);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled("img")<{ primary: boolean }>`
  object-fit: contain;
  width: 100%;
  max-height: 100%;
  margin: ${({ primary }) => (primary ? "32px" : "0")};
`;

const INITIAL_IMG = "/image-upload.svg";

const PostImage = ({ src }: { src: string }) => {
  return (
    <Wrapper>
      <Image primary={src === INITIAL_IMG} src={src} alt="post_image" />
    </Wrapper>
  );
};

export default PostImage;
