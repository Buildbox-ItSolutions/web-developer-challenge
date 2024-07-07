import styled from "styled-components";

export const Card = styled("div")(() => ({
  marginTop: "8rem",
  padding: "1.5rem",
  border: "1px solid #3b3b3b",
  borderRadius: "4px",
  backgroundColor: "#313131",
}));

export const CardButtons = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-end",
  gap: "1.5rem",
  marginTop: "1.6rem",
}));
