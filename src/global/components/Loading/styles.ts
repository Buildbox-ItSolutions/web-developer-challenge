import styled, { keyframes } from 'styled-components';

const loading = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const Loading = styled.div`
  background: transparent;
  width: 8rem;
  height: 8rem;
  display: block;
  border-radius: 100%;
  border: 1rem solid ${({ theme }) => theme.colors.primary};
  border-right: 1rem solid transparent;
  animation: ${loading} 1s linear infinite;
`;
