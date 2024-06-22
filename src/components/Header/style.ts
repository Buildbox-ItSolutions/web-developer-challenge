import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.base.spacing.large} 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background.darker};
  position: fixed;
  top: 0;
`;

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 ${({ theme }) => theme.base.spacing.small};
`;
