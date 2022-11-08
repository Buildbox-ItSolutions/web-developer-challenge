import * as S from './styles';

type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  typeButton: string;
};

const Button = ({
  label,
  onClick,
  typeButton,
  disabled = false,
}: ButtonProps) => {
  return (
    <S.Button
      type="button"
      onClick={onClick}
      typeButton={typeButton}
      disabled={disabled}
      data-cy={`button-${typeButton}`}
    >
      {label}
    </S.Button>
  );
};

export default Button;
