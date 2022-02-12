import styled, { keyframes } from "styled-components";

const slideY = keyframes`
  from{
    transform: scaleY(0)
  }
  to{
    transform: scaleY(1)
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  position: relative;
  margin-bottom: 20px;
  background-color: #313131;
  animation: ${slideY} 1s;
`;

export const Area = styled.div`
  width: 100%;
  padding-top: 30px;
  display: flex;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40%;

  @media (max-width: 500px) {
    width: 75px;
    height: 75px;
  }
`;

export const TextArea = styled.div`
  width: 70%;
  margin-left: 30px;

  @media (max-width: 400px) {
    width: 100%;
    margin-left: 0px;
    margin-top: 20px;
  }
`;

export const StatusText = styled.p`
  width: 100%;
  color: #9f9f9f;

  @media (max-width: 500px) {
    font-size: 14px;
  }

  @media (max-width: 400px) {
    font-size: 13px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

export const Text = styled.span`
  color: #5f5f5f;
  font-size: 12px;

  @media (max-width: 500px) {
    font-size: 11px;
  }
`;

export const UserName = styled.span`
  font-size: 13px;
  font-weight: bold;
  color: #5f5f5f;

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const ButtonDelete = styled.button`
  border: none;
  outline: none;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
`;
