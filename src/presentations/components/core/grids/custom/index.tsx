import * as S from "./styles";

type Props = {
  children: any;
};

export function CustomGrid({ children }: Props) {
  return <S.Custom>{children}</S.Custom>;
}
