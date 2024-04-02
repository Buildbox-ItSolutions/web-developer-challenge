import * as S from "./styles";
type ButtonProps = {
  variant?: "primary" | "transparent";
} & React.ComponentPropsWithoutRef<"button">;

export const Button = ({ children, variant = "transparent", ...props }: ButtonProps) => {
  return (
    <S.ButtonStyle $variant={variant} {...props}>
      {children}
    </S.ButtonStyle>
  );
};
