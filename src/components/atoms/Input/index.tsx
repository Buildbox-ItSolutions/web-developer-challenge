import React from "react";
import { StyledInput } from "./styles";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return <StyledInput ref={ref} {...props} />;
});
