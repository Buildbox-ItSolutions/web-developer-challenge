import styled, { keyframes } from "styled-components";

type Props = {
  isActive: string;
};

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 130px 0;
`;

export const Area = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 580px) {
    width: 90%;
  }
`;

export const AddPostArea = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #313131;
  margin-bottom: 60px;
`;

export const Avatar = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 40%;
  margin-bottom: 20px;
`;

export const InputArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const InputName = styled.input`
  width: 100%;
  color: #fff;
  border: none;
  border-radius: 7px;
  outline: none;
  padding: 10px;
  background-color: #494949;
  margin-bottom: 10px;
`;

export const InputMsg = styled.textarea`
  width: 100%;
  color: #fff;
  border: none;
  border-radius: 7px;
  outline: none;
  padding: 10px;
  font-family: Arial;
  resize: none;
  background-color: #494949;
`;

export const BtnArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const DiscardBtn = styled.button<Props>`
  color: #5f5f5f;
  text-decoration: underline;
  border: none;
  outline: none;
  pointer-events: ${(props) => (!props.isActive ? "none" : "auto")};
  background-color: transparent;
`;

export const AddBtn = styled.button<Props>`
  padding: 12px 20px;
  border: none;
  border-radius: 7px;
  outline: none;
  color: ${(props) => (!props.isActive ? "#313131" : "#fff")};
  background-color: ${(props) => (!props.isActive ? "#5f5f5f" : "#71bb00")};
  pointer-events: ${(props) => (!props.isActive ? "none" : "auto")};
  margin-left: 20px;
`;

export const TextFeed = styled.span`
  color: #7a7a7a;
  font-weight: bold;
  font-size: 12px;
  display: block;
  margin-bottom: 10px;
`;

export const FeedArea = styled.div`
  width: 100%;
`;

const slideY = keyframes`
  from{
    transform: translateY(30px)
  }
  to{
    transform: translateY(0px)
  }
`;

export const EmptyArea = styled.div`
  width: 100%;
  color: #9f9f9f;
  text-align: center;
  margin-top: 40px;
  font-weight: bold;
  animation: ${slideY} 1s;
`;
