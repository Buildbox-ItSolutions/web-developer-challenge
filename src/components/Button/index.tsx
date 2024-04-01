import { ButtonStyled } from "./styles";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = (props) => {
  const {
    type = "button",
    color = "primary",
    variant = "contained",
    ...rest
  } = props;

  return (
    <ButtonStyled {...rest} type={type} color={color} className={variant} />
  );
};

export * from "./types";

export default Button;
