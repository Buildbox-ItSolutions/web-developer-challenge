import styled, { css, keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledSVG = styled.svg`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.25rem; /* 5/4 rem */
  height: 1.25rem; /* 5/4 rem */
  animation: ${spin} 1s linear infinite;
  fill: none;
  ${({ color }) => color && css`
    color: ${color};
  `}

  .opacity-25 {
    opacity: 0.25;
    stroke: currentColor;
    stroke-width: 4;
  }

  .opacity-75 {
    opacity: 0.75;
    fill: currentColor;
  }
`;
