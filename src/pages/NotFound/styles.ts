import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  h1 {
    color: ${({ theme }) => theme.colors.text[200]};
    font-size: 6rem;
  }
  h2 {
    color: ${({ theme }) => theme.colors.text[200]};
    font-size: 5rem;
  }
`;
