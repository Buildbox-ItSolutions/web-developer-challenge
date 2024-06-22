import { ButtonHTMLAttributes } from "react";
import { DangerButton, OutlineButton, PrimaryButton } from "./style";

export type ButtonVariants = "primary" | "danger" | "outline";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
}

export function Button({
  variant = "primary",
  ...props
}: Readonly<ButtonProps>) {
  const buttonVariant = {
    primary: (props: ButtonProps) => <PrimaryButton {...props} />,
    danger: (props: ButtonProps) => <DangerButton {...props} />,
    outline: (props: ButtonProps) => <OutlineButton {...props} />,
  };

  return buttonVariant[variant](props);
}
