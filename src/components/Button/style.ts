import styled from "styled-components";

const BaseButton = styled.button`
  padding: ${({ theme }) =>
    `${theme.base.spacing.medium} ${theme.base.spacing.large}`};
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
  }
`;

export const OutlineButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.text.secondary};
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.text.primary};
  }
`;
