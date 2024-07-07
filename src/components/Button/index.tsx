import styled from "styled-components";

export const Button = styled("button")(({ type }) => ({
  // Button type submit
  ...(type === "submit" && {
    backgroundColor: "#5f5f5f",
    color: "#313131",
    padding: "0.8rem 1.4rem",
  }),

  // Button type button
  ...(type === "button" && {
    background: "none",
    color: "#5f5f5f",
    textDecoration: "underline",
  }),
}));
