import { TextareaHTMLAttributes } from "react";
import { CustomTextarea } from "./style";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea(props: Readonly<Props>) {
  return <CustomTextarea {...props} />;
}
