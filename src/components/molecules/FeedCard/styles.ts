import styled from "styled-components";

export const Container = styled("div")(({ theme }) => ({
  minHeight: "22.3rem",
  height: "100%",
  padding: "1.2rem 1.2rem 3.5rem 2.3rem",
  borderRadius: "0.5rem",
  border: `0.1rem solid ${theme.borders.card}`,
  width: "100%",
  maxWidth: "51.4rem",
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.background.card,
}));

export const Actions = styled("div")(({ theme }) => ({
  width: "100%",
  height: "fit-content",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  svg: {
    cursor: "pointer",
    color: theme.borders.orange,
  },
}));

export const ContentContainer = styled("div")(() => ({
  display: "flex",
  gap: "3.3rem",
  "@media (max-width: 500px)": {
    flexDirection: "column",
    gap: "0.3rem",
  },
}));

export const ImageField = styled("div")(({ theme }) => ({
  border: `1px solid ${theme.borders.image}`,
  borderRadius: "3.2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "8.6rem",
  height: "8.6rem",
  backgroundColor: "transparent",
  svg: {
    color: theme.textColor.primary,
  },
  img: {
    objectFit: "fill",
    width: "8.6rem",
    height: "8.6rem",
    border: `1px solid ${theme.borders.image}`,
    borderRadius: "3.2rem",
  },
  marginTop: "1.5rem",
}));

export const Content = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
  paddingTop: "2rem",
}));

export const Description = styled("p")(({ theme }) => ({
  fontSize: "1.6rem",
  color: theme.textColor.primary,
  maxWidth: "35rem",
  minHeight: "6rem",
  lineBreak: "anywhere",
  whiteSpace: "wrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  wordWrap: "break-word",
  paddingRight: "0.5rem"
}));


export const CreditsIntro = styled("p")(({ theme }) => ({
  color: theme.textColor.secondary,
  fontSize: "1.3rem",
  marginBottom: "0.8rem",
}));

export const CreditsPerson = styled("p")(({ theme }) => ({
  color: theme.textColor.tertiary,
  width: "30rem",
  height: "1.5rem",
  fontSize: "1.3rem",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
  wordWrap: "break-word",
  lineBreak: "anywhere",
}));
