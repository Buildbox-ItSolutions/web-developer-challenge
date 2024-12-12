import React, { useEffect, useState } from 'react';

import { ButtonProps } from 'models/ButtonProps';
import { StyledButton } from './styles';

const Button: React.FC<ButtonProps> = ({
  typeButton = 'disabled',
  ...props
}) => {
  const [disableButton, setDisableButton] = useState<boolean>(false);

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

export default Button;
