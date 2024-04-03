import styled from "styled-components";

export const ImageWrapper = styled.div`
  display: grid;
  width: 8.5rem;

  @media (max-width: 48em) {
    width: 14rem;
  }
`;

export const Skeleton = styled.div`
  height: 8.5rem;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.body_bg} 0%,
    ${({ theme }) => theme.colors.input_bg} 50%,
    ${({ theme }) => theme.colors.body_bg} 100%
  );
  border-radius: 3.5rem;
  grid-area: 1/1;
  background-size: 200%;
  animation: skeleton 2s linear infinite;

  @keyframes skeleton {
    to {
      background-position: -200%;
    }
    from {
      background-position: 200%;
    }
  }

  @media (max-width: 48em) {
    height: 14rem;
  }
`;

export const ImageEl = styled.img`
  transition: all 0.2s;
  grid-area: 1/1;
  opacity: 0;
  height: 100%;
  object-fit: cover;
`;
