import { forwardRef } from "react";
import * as S from "./styles";

type InputImageProps = {
  $url?: string;
  $isDisabled: boolean;
} & React.ComponentPropsWithoutRef<"input">;

export const ImagePost = forwardRef<HTMLInputElement, InputImageProps>(
  ({ ...props }: InputImageProps, ref) => {
    const { $url, $isDisabled } = props;
    return (
      <S.Label $url={$url}>
        <S.InputImageStyle {...props} ref={ref} disabled={$isDisabled} />
      </S.Label>
    );
  }
);
