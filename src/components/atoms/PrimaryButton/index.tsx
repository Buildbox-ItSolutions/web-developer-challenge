import React from "react";
import { Button } from "./styles";

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const PrimaryButton = React.forwardRef<
  HTMLButtonElement,
  PrimaryButtonProps
>(({ label, ...props }, ref) => {
  return (
    <Button ref={ref} {...props}>
      {label}
    </Button>
  );
});
