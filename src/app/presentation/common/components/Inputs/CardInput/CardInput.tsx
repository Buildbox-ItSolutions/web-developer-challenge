import React from "react";

import { ErrorInput, StyledInput } from "./styled-components";
import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  getMsgNameField?: boolean;
}

const Input: React.FC<InputProps> = ({ getMsgNameField, ...props }) => {
  return (
    <>
      <StyledInput {...props} />
      {getMsgNameField && <ErrorInput>Este campo é obrigatório</ErrorInput>}
    </>
  );
};

export default Input;
