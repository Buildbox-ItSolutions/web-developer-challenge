import styled from "styled-components";

export const Title = styled("h1")(() => ({
  color: "red",
  fontSize: "50px",
}));

export const Container = styled("main")(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "5.9rem",
    maxWidth: "51.4rem",
    margin: "0 auto",
    marginTop: "3.7rem",
    padding: "0 1rem"
}));
