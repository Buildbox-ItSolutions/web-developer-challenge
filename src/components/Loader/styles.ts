import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 1, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    position: relative;
    margin: 0 auto;
  }

  div:before,
  div:after {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 10px solid transparent;
    border-top-color: ${({ theme }) => theme.colors.gray[400]};
  }

  div:before {
    z-index: 100;
    animation: ${spin} 1s infinite;
  }

  div:after {
    border: 10px solid ${({ theme }) => theme.colors.white};
  }
`;
