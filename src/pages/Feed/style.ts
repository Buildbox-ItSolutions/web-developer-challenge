import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 413px;
  max-width: 516px;
  margin: 40px auto 56px;
  padding: 2%;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/photo-upload.png");
  width: 80px;
  height: 80px;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const Avatar = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const FeedItemContainer = styled.div`
  max-width: 516px;
  margin: 40px auto 56px;
  padding: 2%;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
`;

export const Name = styled.input`
  width: 100%;
  height: 40px;
  margin: 40px auto 10px;
  padding: 2%;
  border-radius: 8px;
  background-color: #494949;
  color: #fff;
`;

export const Message = styled.input`
  width: 100%;
  height: 90px;
  padding: 2%;
  border-radius: 8px;
  background-color: #494949;
  color: #fff;
`;

export const MessageBox = styled.div`
  word-wrap: break-word;
  display: flex;
  color: #9f9f9f;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const Button = styled.button`
  margin-top: 60px;
  background-color: #5f5f5f;
  border-radius: 4px;
  padding: 10px 24px;
  float: right;
  &:hover,
  &:active {
    background-color: #71bb00;
  }
`;

export const DeleteButton = styled.div`
  float: right;
  cursor: pointer;
`;

export const ClearButton = styled.button`
  margin-top: 10px;
  margin: 20px;
  border: none;
  color: #5f5f5f;
  cursor: pointer;
  margin-top: 70px;
  float: right;
`;

export const Info = styled.div`
  color: #9f9f9f;
`;
