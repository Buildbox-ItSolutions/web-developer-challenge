import React from 'react';

/* Styles */
import { Submit } from './styles';

/* Types */
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ disabled, onClick }) => {
  return (
    <Submit disabled={disabled} onClick={onClick}>
      Publicar
    </Submit>
  );
};

export default Button;
