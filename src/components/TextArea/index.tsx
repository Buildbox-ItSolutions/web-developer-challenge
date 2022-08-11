import React, { TextareaHTMLAttributes } from "react";

import { FieldValues, UseFormRegister } from "react-hook-form";

import { Container } from "./styles";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  register: UseFormRegister<FieldValues>;
  name: string;
}

export const TextArea: React.FC<Props> = ({ register, name, ...rest }) => {
  return <Container {...register(name)} {...rest} />;
};
