import styled from "styled-components";

export const Input = styled("input")(({ theme }) => ({
  height: "4rem",
  width: "100%",
  padding: "1.6rem 1.7rem",
  backgroundColor: theme.background.input,
  borderRadius: "0.6rem",
  color: theme.textColor.primary,
  "&::placeholder": {
    color: theme.textColor.primary,
  },
}));

export const TextArea = styled("textarea")(({ theme }) => ({
  height: "8rem",
  width: "100%",
  padding: "1.6rem 1.7rem",
  backgroundColor: theme.background.input,
  borderRadius: "0.6rem",
  color: theme.textColor.primary,
  resize: "none",
  fontFamily: "Roboto",
  "&::placeholder": {
    color: theme.textColor.primary,
    fontFamily: "Roboto",
  },
}));
