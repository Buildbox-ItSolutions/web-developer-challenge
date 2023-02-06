import React from "react";
import { Button } from "./styles";

interface TextButtonProps
  extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  label: string;
}

export const TextButton = React.forwardRef<HTMLAnchorElement, TextButtonProps>(
  ({ label, ...props }, ref) => {
    return (
      <Button ref={ref} {...props}>
        {label}
      </Button>
    );
  }
);
