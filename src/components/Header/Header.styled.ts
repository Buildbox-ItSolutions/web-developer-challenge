import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  padding: 2.4rem 6.31rem 2.4rem 6.32rem;
  background-color: ${({ theme }) => theme.colors.header_bg};
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  @media (max-width: 48em) {
    padding: 2rem 3rem;
  }
`;

export const Image = styled.img`
  width: 10.3rem;
  height: 4.5rem;
  object-fit: contain;
`;
