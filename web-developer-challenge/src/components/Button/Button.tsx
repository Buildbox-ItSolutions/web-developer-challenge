import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './ButtonStyles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline'
}

const Button: React.FC<ButtonProps> = ({ children, variant="default" , ...rest }) => {
  return (
    <>
      <StyledButton variant={variant} {...rest}>{children}</StyledButton>
    </>
  );
};

export default Button;
