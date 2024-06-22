import styled from "styled-components";

export const LogoContainer = styled.div`
  width: 100%;
  display: grid;
  text-align: center;

  h1 {
    color: ${({ theme }) => theme.colors.main.primary};
  }

  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`;
