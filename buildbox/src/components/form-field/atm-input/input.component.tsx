import { InputHTMLAttributes } from "react";
import { InputStyled } from "./input.style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FunctionComponent<InputProps> = (props) => {
  return <InputStyled {...props}></InputStyled>;
};
