import styled from "styled-components";
import { IHaveImage } from "../../../core/types";

export const Container = styled("section")(({ theme }) => ({
  height: "35rem",
  width: "100%",
  padding: "2.3rem",
  maxWidth: "51.4rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.background.card,
  borderRadius: "0.5rem",
  border: `0.1rem solid ${theme.borders.card}`,
}));

export const FormWrapper = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  alignItems: "center",
  gap: "0.8rem",
}));

export const ImageField = styled("span")(({ theme }) => ({
  border: `1px solid ${theme.borders.image}`,
  borderRadius: "3.2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "8.6rem",
  height: "8.6rem",
  overflow: "hidden",
  cursor: "pointer",
  backgroundColor: "transparent",
  svg: {
    color: theme.textColor.primary,
  },
  img: {
    objectFit: "fill",
    width: "8.6rem",
    height: "8.6rem",
    border: `1px solid ${theme.borders.image}`,
  },
  marginBottom: "0.8rem",
}));

export const Actions = styled("div")(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "end",
  alignItems: "center",
  gap: "2.5rem",
  marginTop: "2.4rem",
}));

export const ImageArea = styled("div")<IHaveImage>(({ theme, haveImage }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  gap: "2.5rem",
  marginLeft: haveImage ? "4.6rem" : "0",
  "& > svg": {
    color: theme.borders.orange,
    cursor: "pointer",
  },
}));
