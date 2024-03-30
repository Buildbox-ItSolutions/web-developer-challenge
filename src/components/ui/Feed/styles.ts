import Styled from "../Styled";
import styled from "styled-components";

export const FeedTitle = styled.h3`
  width: 100%;
  color: #7a7a7a;
  font-size: 14px;
  margin-top: 56px;
`;

export const PostContainer = styled(Styled.Card)`
  width: 100%;
  gap: 24px;
`;

export const PostContent = styled.div`
  display: flex;
  width: 100%;
  gap: 32px;
`;

export const PostText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  gap: 24px;
`;

export const PostMessage = styled.p`
  font-size: 16px;
  color: #9f9f9f;
  text-align: left;
  height: auto;
  width: 100%;
  overflow: hidden;
  line-break: anywhere;
`;

export const PostImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 88px;
  width: 88px;
  border: 1px solid #4b4b4b;
  border-radius: 40%;
  overflow: hidden;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PostDeleteContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  cursor: pointer;
`;

export const PostNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostNameSendBy = styled.span`
  font-size: 12px;
  font-weight: 500;
  text-align: left;
  color: #5f5f5f;
`;

export const PostName = styled.p`
  font-size: 14px;
  text-align: left;
  color: #7a7a7a;
`;

export const NoPostText = styled.p`
  font-size: 12px;
  font-weight: 500;
  text-align: left;
  color: #5f5f5f;
`;
