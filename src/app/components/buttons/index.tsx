import React from "react";
import { CustomButton } from "./style";

type ButtonProps = {
  label: string;
};

export const Button = ({ label }: ButtonProps) => {
  return <CustomButton type="submit">{label}</CustomButton>;
};
