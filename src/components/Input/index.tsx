import * as S from "./styles";

type InputTextProps = React.ComponentPropsWithoutRef<"input">;
export const InputText = ({ ...props }: InputTextProps) => {
  return <S.InputTextStyle type="text" {...props} />;
};
