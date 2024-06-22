import styled from "styled-components";

export const StyledIconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.base.spacing.small};
  margin: 0;
`;
