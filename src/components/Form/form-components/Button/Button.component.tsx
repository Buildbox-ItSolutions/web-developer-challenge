import * as S from "./Buttonstyled";
type ButtonProps = React.ComponentProps<"button"> & {
  valid: boolean;
};

const Button = ({ children, valid }: ButtonProps) => {
  return (
    <S.ButtonStyle className={!valid ? "active" : ""}>{children}</S.ButtonStyle>
  );
};

export default Button;
