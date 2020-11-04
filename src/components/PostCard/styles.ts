import styled from "styled-components";

export const AppPostCard = styled.div`
  width: 600px;
  height: auto;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  margin-bottom: 30px;
  @media (max-width: 650px) {
    width: 90%;
  }
`;

export const PostCardHeader = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  /* superior | direita | inferior | esquerda */
  padding: 20px 20px 0 20px;
`;

export const PostCardBody = styled.span`
  display: flex;
  flex-direction: row;
  text-align: left;
  padding: 20px;
  line-height: 20px;
  font-size: 16px;
`;

export const PostCardBodyText = styled.p`
  white-space: pre-wrap;
  overflow-wrap: break-word;

  font-size: 16px;
  font-weight: normal;
  line-height: 1.25;
  text-align: justify;
  color: #9f9f9f;
`;

export const PostCardFooter = styled.span`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 20px 20px;
  margin-left: 110px;
`;

export const PostCardRoundImage = styled.div`
  width: 88px;
  height: 88px;
  object-fit: contain;
  border-radius: 36px;
  border: solid 1px #4b4b4b;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  overflow: hidden;

  img {
    max-width: 88px;
    max-height: 88px;
    width: auto;
    height: auto;
  }
`;

export const PostCardInfo1 = styled.p`
  font-size: 12px;
  color: #5f5f5f;
`;

export const PostCardInfo2 = styled.p`
  font-size: 14px;
  color: #7a7a7a;
`;
