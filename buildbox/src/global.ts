import styled, { keyframes } from "styled-components";

const fade = keyframes`
  0% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
`;

export const MainContainer = styled.main`
  animation: ${fade} 1s;
  background-color: #343434;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
