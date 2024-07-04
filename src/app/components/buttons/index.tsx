import React from "react";
import { CustomButton } from "./style";

type ButtonProps = {
  children: string;
  noBg?: boolean;
};

export const Button = ({ children, noBg = false }: ButtonProps) => {
  return (
    <CustomButton type="submit" noBg={noBg}>
      {children}
    </CustomButton>
  );
};
