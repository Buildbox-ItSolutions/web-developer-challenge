import styled from "styled-components";

export const Button = styled("button")(({ theme }) => ({
  height: "4.1rem",
  width: "9.6rem",
  borderRadius: "0.6rem",
  color: theme.textColor.wihte,
  cursor: "pointer",
}));

export const ButtonGreen = styled(Button)(({ theme }) => ({
  backgroundColor: theme.colors.primary,
  color: theme.colors.white,
  transition: "0.1s linear opacity",
  "&:disabled": {
    color: theme.textColor.labelDisabled,
    backgroundColor: theme.colors.disabled,
    cursor: "default",
  },
  "&:hover": {
    opacity: 0.8,
  }
}));

export const ButtonDiscard = styled(Button)(({ theme }) => ({
  width: "fit-content",
  height: "fit-content",
  color: theme.textColor.secondary,
  backgroundColor: "transparent",
  textDecoration: "underline",
}));
