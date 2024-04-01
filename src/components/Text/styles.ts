import styled, { css } from "styled-components";
import { TextStyledProps } from "./types";

export const TextStyled = styled.p<TextStyledProps>`
  font-weight: 400;
  text-align: left;

  ${(props) => css`
    font-family: ${props.theme.font.family};
    font-size: ${props.theme.font.sizes[props.size]};
    color: ${props.theme.colors[props.color] || "#FFFFFF"};
  `}

  &.medium {
    font-weight: 500;
  }

  &.center {
    text-align: center;
  }

  &.right {
    text-align: right;
  }
`;
