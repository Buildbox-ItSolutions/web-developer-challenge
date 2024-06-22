import styled from "styled-components";

export const Root = styled.div`
  background-color: ${({ theme }) => theme.colors.background.darker};
  padding: ${({ theme }) => theme.base.spacing.small};
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.background.lighter};
  padding: ${({ theme }) => theme.base.spacing.medium};
  display: grid;
  gap: ${({ theme }) => theme.base.spacing.large};
`;
