import { forwardRef } from "react";
import * as S from "./styles";

type TextAreaType = {
  $hasError?: string | undefined;
} & React.ComponentPropsWithoutRef<"textarea">;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaType>(
  ({ ...props }: TextAreaType, ref) => {
    const { $hasError } = props;
    return (
      <>
        <S.TextAreaStyle ref={ref} {...props} $hasError={$hasError} />
      </>
    );
  }
);
