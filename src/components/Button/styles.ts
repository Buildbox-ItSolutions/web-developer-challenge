import styled, { css } from "styled-components";

const variants = {
  primary: css`
    background-color: #5f5f5f;
    color: #313131;
  `,
  transparent: css`
    background-color: transparent;
    color: #5f5f5f;
    text-decoration: underline;
  `,
};

interface ButtonProps {
  $variant: "primary" | "transparent";
}

export const ButtonStyle = styled.button<ButtonProps>`
  ${({ $variant }) => css`
    width: 98px;
    height: 41px;
    padding: 5px;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    font-size: 14px;

    ${variants[$variant]};
  `}
`;
