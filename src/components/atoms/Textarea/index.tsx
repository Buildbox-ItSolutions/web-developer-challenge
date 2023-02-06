import React from "react";
import { StyledTextArea } from "./styles";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>((props, ref) => {
  return <StyledTextArea ref={ref} {...props} />;
});
