import InputUi from "../../ui/forms/input.ui.tsx";
import { forwardRef, InputHTMLAttributes, LegacyRef } from "react";
import HelperTextUi from "../../ui/forms/helper-text.ui.tsx";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  helperText?: string;
}

function Input({ error, helperText, ...props }: Props,  ref: LegacyRef<HTMLInputElement>) {


  return (
    <>
      <InputUi error={error} {...props} ref={ref} />
      <HelperTextUi variant={error ? 'error' : undefined}>{helperText}</HelperTextUi>
    </>
  )
}

export default forwardRef(Input);