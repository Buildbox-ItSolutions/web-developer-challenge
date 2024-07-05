import React from "react";
import { CustomButton, CustomIconButton } from "./style";

type ButtonProps = {
  children: string;
  onClick?: () => void;
  disabled?: boolean;
  noBg?: boolean;
};

type IconButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  confirmation?: boolean;
  title?: string;
};

export const Button = ({
  children,
  onClick,
  disabled,
  noBg = false,
}: ButtonProps) => {
  return (
    <CustomButton
      type={noBg ? "button" : "submit"}
      onClick={onClick}
      noBg={noBg}
      disabled={disabled}
    >
      {children}
    </CustomButton>
  );
};

export const IconButton = ({
  children,
  onClick,
  confirmation,
  title,
}: IconButtonProps) => {
  return (
    <CustomIconButton
      confirmation={confirmation}
      type="button"
      title={title}
      onClick={onClick}
    >
      {children}
    </CustomIconButton>
  );
};
