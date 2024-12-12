import styled, { DefaultTheme } from "styled-components";
import { FontSize, StandardSizeTypes } from "../../styles/global";
import { TextProps } from "./text-component.component.model";

export const TextStyled = styled.p<TextProps>`
  font-size: ${(props) => getFontStyle(props.theme, props.size).size};
  color: ${(props) => getFontStyle(props.theme, props.size).color};
  max-width: 100% !important;
  word-wrap: break-word;
`;

const getFontStyle = (theme: DefaultTheme, size?: StandardSizeTypes) => {
  if (size === "sm") {
    return {
      size: FontSize.Small,
      color: theme.colors.gray[400],
    };
  }
  if (size === "lg") {
    return {
      size: FontSize.Large,
      color: theme.colors.gray[200],
    };
  }
  return {
    size: FontSize.Medium,
    color: theme.colors.gray[300],
  };
};
