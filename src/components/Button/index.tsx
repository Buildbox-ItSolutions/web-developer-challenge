import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className: ClassProps;
}

type ClassProps = "primary" | "secondary";

export function Button({ text, className, ...props }: Props) {
  return (
    <S.ButtonContainer className={className} {...props}>
      {text}
    </S.ButtonContainer>
  );
}
