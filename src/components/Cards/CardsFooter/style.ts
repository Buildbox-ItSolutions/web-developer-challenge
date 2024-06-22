import styled from "styled-components";

export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: ${({ theme }) => theme.base.spacing.medium};
`;
