import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 540px) {
    width: 50rem;
  }
`;

export const Title = styled.h1`
  color: ${({theme}) => theme.colors.grayDark2};
`