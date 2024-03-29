import styled, { css } from "styled-components";

interface ButtonUiProps {
  variant?: keyof typeof ButtonVariants;
  disabled?: boolean;
}

const ButtonVariants = {
  primary: css<ButtonUiProps>`
      border-radius: 8px;
      background-color: ${({ disabled, theme }) => disabled ? theme.colors.brownishGrey : theme.colors.darkLimeGreen};
      cursor: pointer;
      transition: background-color 0.3s;
      color: ${({ disabled, theme }) => disabled ? theme.colors.blackTwo : '#fff'};
  `,
  link: css`
      background-color: transparent;
      color: #5f5f5f;
      width: auto;
      text-decoration: underline;
      &:hover {
          color: #4b4b4b;
      }
  `,
};

const ButtonUi = styled.button<ButtonUiProps>`
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    border-radius: 8px;
    width: 6.125rem;
    height: 2.563rem;

    ${({ variant = "primary" }) => ButtonVariants[variant]}
`;

export default ButtonUi;