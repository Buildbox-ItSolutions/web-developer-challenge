import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin:0;
        padding: 0;
    }
    body{
        font-size: 14px;
        font-family: Roboto, sans-serif;
}
`;

export enum FontFamily {
  Primary = "Roboto, sans-serif",
}

export enum LineHeight {
  Thick = 1.3,
}

export enum FontWeight {
  Bold = "bold",
  SemiBold = 500,
  Normal = "normal",
}

export enum FontSize {
  Small = "12px",
  Medium = "14px",
  Large = "16px",
}

export enum Spacing {
  XSmall = "4px",
  Small = "8px",
  XMedium = "12px",
  Medium = "16px",
  Large = "24px",
  XLarge = "32px",
  XXLarge = "40px",
  XXXLarge = "60px",
}

export enum Color {
  Black = "black",
  White = "#FFF",
}

export const Border = {
  Color: Color.Black,
  Width: "1px",
  Radius: "8px",
  RadiusLarge: "36px",
};

export type StandardSizeTypes = "sm" | "md" | "lg";

export const TransitionDuration = ".3s";
