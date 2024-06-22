import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: ${({ theme }) => theme.base.spacing.small};
`;
