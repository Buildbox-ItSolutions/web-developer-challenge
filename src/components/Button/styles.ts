import styled, { css } from "styled-components";
import { ButtonStyledProps } from "./types";

export const ButtonStyled = styled.button<ButtonStyledProps>`
  border: none;
  outline: none;
  font-size: 14px;
  cursor: pointer;
  padding: 12px 24px;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.font};
  background-color: ${(props) => props.theme.colors[props.color]};

  &:disabled {
    cursor: default;
    color: ${(props) => props.theme.colors.black_two};
    background-color: ${(props) => props.theme.colors.disabled};
  }

  &.ghost {
    padding: 0;
    background-color: transparent;
  }

  &.ghost:disabled {
    color: ${(props) => props.theme.colors.disabled};
  }
`;
