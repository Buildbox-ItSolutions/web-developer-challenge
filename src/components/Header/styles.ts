import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  align-items: center;

  padding: 22px 0;

  background: ${({ theme }) => theme.colors.background[100]};

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary[100]};
  }
  h2 {
    font-size: 1.1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text[200]};
  }
`;
