import styled from "styled-components";

export const Container = styled("div")(({ theme }) => ({
  height: "9.3rem",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.background.header,
  borderBottom: `0.1rem solid ${theme.borders.header} `
}));

export const LogoName = styled("h1")(({ theme }) => ({
  color: theme.colors.primary,
  fontSize: theme.fontSizes["3xl"],
  fontWeight: 800,
}));

export const LogoDescription = styled("h2")(({ theme }) => ({
  color: theme.colors.gray,
  fontSize: theme.fontSizes.sm,
  fontWeight: "bold",
  textTransform: "uppercase",
}));
