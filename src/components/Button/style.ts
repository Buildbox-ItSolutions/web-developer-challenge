import styled from "styled-components";

const BaseButton = styled.button`
  padding: ${({ theme }) =>
    `${theme.base.spacing.small} ${theme.base.spacing.large}`};
  border: none;
  border-radius: ${({ theme }) => theme.base.borderRadius.small};
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.main.primary};
  color: ${({ theme }) => theme.colors.text.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.main.hover};
  }
`;

export const DangerButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.danger.primary};
  color: ${({ theme }) => theme.colors.text.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.danger.hover};
  }`;
