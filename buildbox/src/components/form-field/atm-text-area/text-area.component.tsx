import { TextareaHTMLAttributes } from "react";
import { InputTextAreaStyled } from "./text-area.component.style";

interface InputTextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const InputTextArea: React.FunctionComponent<InputTextAreaProps> = (
  props
) => {
  return <InputTextAreaStyled {...props} />;
};
