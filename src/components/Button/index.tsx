import { useEffect, useState, ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeButton?: 'disabled' | 'primary' | 'secondary';
}

export function Button({ typeButton = 'disabled', ...props }: ButtonProps) {
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    if (typeButton === 'disabled') {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [typeButton]);

  return (
    <StyledButton className={typeButton} disabled={disableButton} {...props} />
  );
};
