import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: white;
  width: 37vw;
  max-width: 550px;
  background-color: #313131;
  padding: 56px 24px 32px;
  gap: 40px;
  margin: 40px auto 16px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  position: sticky;
  :last-of-type {
    margin-bottom: 170px;
  }
`;

export const ImageWrapper = styled.div`
  width: 88px;
  height: 88px;

  border-radius: 36px;
`;

export const PostImage = styled.img`
  width: 88px;
  height: 88px;
  object-fit: cover;
  border-radius: 36px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MessageText = styled.span`
  color: #9f9f9f;
  font-family: "Roboto";
  text-align: left;
  font-size: 16px;
  margin-bottom: 24px;
`;

export const SentByText = styled.span`
  font-family: "Roboto";
  color: #5f5f5f;
  font-size: 12px;
  text-align: left;
`;

export const AuthorText = styled.span`
  color: #7a7a7a;
  font-family: "Roboto";
  font-size: 14px;
`;

export const DeleteIcon = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px;
`;
