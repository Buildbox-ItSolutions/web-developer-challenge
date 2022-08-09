import * as S from "./styles";

type Props = S.ButtonProps & {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Button({ onClick, children, ...props }: Props) {
  return (
    <S.Button onClick={onClick} {...props}>
      {children}
    </S.Button>
  );
}
