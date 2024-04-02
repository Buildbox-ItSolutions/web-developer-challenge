import { forwardRef } from "react";
import * as S from "./styles";

type InputTextProps = {
  $hasError?: string;
} & React.ComponentPropsWithoutRef<"input">;

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ ...props }: InputTextProps, ref) => {
    const { $hasError } = props;

    return (
      <>
        <S.InputTextStyle type="text" {...props} ref={ref} $hasError={$hasError} />
      </>
    );
  }
);
