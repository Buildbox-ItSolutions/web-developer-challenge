import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  height: number;
}

export function Input({ height, ...props }: Props) {
  return (
    <InputContainer height={height}>
      <input type="text" {...props} />
    </InputContainer>
  );
}
