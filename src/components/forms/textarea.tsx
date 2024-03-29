import { forwardRef, LegacyRef, TextareaHTMLAttributes } from "react";
import HelperTextUi from "../../ui/forms/helper-text.ui.tsx";
import TextareaUi from "../../ui/forms/textarea.ui.tsx";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean;
  helperText?: string;
}

function Textarea({ error, helperText, ...props }: Props, ref: LegacyRef<HTMLTextAreaElement>) {

  return (
    <>
      <TextareaUi error={error} ref={ref} {...props} />
      <HelperTextUi variant={error ? 'error' : undefined}>{helperText}</HelperTextUi>
    </>
  )
}

export default forwardRef(Textarea);