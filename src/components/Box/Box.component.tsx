import * as S from "./Box.styled";

const Box = ({ children }: React.PropsWithChildren) => {
  return <S.BoxWrapper>{children}</S.BoxWrapper>;
};

export default Box;
