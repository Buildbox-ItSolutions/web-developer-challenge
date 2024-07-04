import styled from "styled-components";

export const Container = styled("section")(() => ({
  width: "100%",
  gap: "1.3rem",
  marginBottom: "4rem"
}));

export const Title = styled("h2")(({ theme }) => ({
  color: theme.textColor.tertiary,
  marginBottom: "1.2rem"
}));

export const CardsArea = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  height: "100%",
  gap: "1.6rem",
}));

export const NullData = styled("p")(({ theme }) => ({
  color: theme.textColor.tertiary,
  fontSize: "1.2rem",
  fontWeight: "bold",
  textAlign: "center",
}));
