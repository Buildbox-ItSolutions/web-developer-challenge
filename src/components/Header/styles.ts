import styled from "styled-components";

export const Container = styled("div")(() => ({
    height: "6rem",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2b2b2b",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "10",
}));

export const Name = styled("h1")(() => ({
    color: "#71bb01",
    fontSize: "25px",
    fontWeight: 800,
}));

export const Description = styled("h2")(() => ({
    color: "#f4f4f4",
    opacity: "20%",
    fontSize: "13px",
    fontWeight: 400,
    textTransform: "uppercase",
}));
