import { ButtonProps } from "../Button";
import { StyledIconButton } from "./style";

export function IconButton({ children, ...props }: Readonly<ButtonProps>) {
  return <StyledIconButton {...props}>{children}</StyledIconButton>;
}
