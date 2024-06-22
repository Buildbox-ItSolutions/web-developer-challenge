import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.background.lighter};
  padding: ${({ theme }) => theme.base.spacing.large};
  border-radius: ${({ theme }) => theme.base.borderRadius.xLarge};
`;

export const IconContainer = styled.div`
  svg {
    color: ${({ theme }) => theme.colors.background.lighter};
  }
`;
