import React from "react";
import styled, { css } from "styled-components";
import { ButtonProps } from "./Button.interface";

const buttonVariants = {
  contained: css`
    ${(props) => css`
      background-color: ${props.theme.accentColor};
      color: ${props.theme.white};
      padding: 12px 24px;
      border-radius: 8px;
      transition: all 250ms ease;

      &:disabled {
        background-color: ${props.theme.text600};
        color: ${props.theme.gray500};
        cursor: not-allowed;
      }
    `}
  `,
  text: css`
    ${(props) => css`
      background: transparent;
      color: ${props.theme.text600};
      text-decoration: underline;
    `}
  `,
};

const StyledButton = styled.button<ButtonProps>`
  ${(props) => buttonVariants[props.variant!]};
  border: none;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "contained",
  ...props
}) => {
  return (
    <StyledButton {...props} variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;
