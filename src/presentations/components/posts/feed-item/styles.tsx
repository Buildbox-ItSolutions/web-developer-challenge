import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 24px;
  padding-top: 56px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
  background-color: #313131;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
`;

export const ButtonDeletePost = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;

export const ImagePost = styled.div``;

export const PostMessage = styled.div`
  color: #9f9f9f;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 16px;
`;

export const PostContent = styled.div`
  margin-left: 32px;
`;

export const PostAuthor = styled.div`
  color: #5f5f5f;
  font-size: 12px;
  line-height: 16px;
`;

export const PostName = styled.div`
  margin-top: 2px;
  color: #7a7a7a;
  font-size: 14px;
  line-height: 18px;
  text-transform: capitalize;
`;
