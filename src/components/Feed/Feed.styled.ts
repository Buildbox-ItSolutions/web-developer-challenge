import styled from "styled-components";

export const FeedStyle = styled.section`
  margin-top: 5.6rem;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 500;

  @media (max-width: 48em) {
    font-size: 2rem;
  }
`;

export const CardBox = styled.ul`
  display: grid;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  margin-top: 0.8rem;
`;

export const Show = styled.li`
  animation: show 0.4s forwards;
  opacity: 0;
  list-style: none;
  transition: all 0.4s ease;

  @keyframes show {
    from {
      transform: translateY(-4rem);
    }

    to {
      transform: initial;
      opacity: initial;
    }
  }

  @keyframes end {
    from {
      transform: initial;
      opacity: 1;
    }

    to {
      transform: translateY(-4rem);
      opacity: 0;
    }
  }
`;
