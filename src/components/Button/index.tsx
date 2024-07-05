import styled from "styled-components";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Button = styled("button")((props: any) => ({
  // Button type submit
  ...(props.type === "submit" && {
    backgroundColor: "#5f5f5f",
    color: "#313131",
    padding: "0.8rem 1.4rem",
  }),

  // Button type button
  ...(props.type === "button" && {
    background: "none",
    color: "#5f5f5f",
    textDecoration: "underline",
    margin: 0,
    padding: 0,
  }),
}));
