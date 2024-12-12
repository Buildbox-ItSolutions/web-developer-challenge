import { ButtonProps } from "./button.component.model";
import { ButtonStyled } from "./button.component.style";

export const SubimitButton: React.FunctionComponent<
  Omit<ButtonProps, "type">
> = ({ buttonKind, ...props }) => {
  return (
    <ButtonStyled
      type="submit"
      {...props}
      buttonKind={buttonKind}
    ></ButtonStyled>
  );
};
