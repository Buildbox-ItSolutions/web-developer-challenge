import React, { InputHTMLAttributes } from "react";

import { Control, FieldValues, UseFormRegister } from "react-hook-form";

import { Container } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<FieldValues>;
  name: string;
  hasDisplay?: boolean;
}

export const Input: React.FC<Props> = ({
  register,
  name,
  hasDisplay = true,
  ...rest
}) => {
  return <Container {...register(name)} {...rest} hasDisplay={hasDisplay} />;
};
