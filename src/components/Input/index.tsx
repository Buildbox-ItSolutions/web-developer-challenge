import { InputHTMLAttributes } from "react";
import { CustomInput } from "./style";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: Readonly<Props>) {
  return <CustomInput {...props} />;
}
