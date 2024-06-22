import styled from "styled-components";

export const CustomTextarea = styled.textarea`
  background-color: ${({ theme }) => theme.colors.background.lighter};
  padding: ${({ theme }) => theme.base.spacing.small};
  border: none;
  border-radius: ${({ theme }) => theme.base.borderRadius.small};
  color: ${({ theme }) => theme.colors.text.primary};
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  &:focus {
    outline: none;
  }
`;
