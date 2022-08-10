import { StyledButton } from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  style?: string;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  style,
  disabled,
}) => {
  return (
    <StyledButton onClick={onClick} className={style} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
