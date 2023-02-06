import { ButtonHTMLAttributes } from "react";

export enum ButtonKind {
  Primary = "primary",
  Secondary = "secondary",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonKind?: ButtonKind;
}
