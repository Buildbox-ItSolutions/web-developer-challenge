import { ComponentProps, forwardRef } from 'react';

import * as S from './styles';

export type ButtonVariant = 'default' | 'ghost';

export type ButtonProps = ComponentProps<'button'> & {
  variant?: ButtonVariant;
  isLoading?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'default',
      type = 'button',
      isLoading = false,
      disabled = false,
      children,
      ...props
    },
    ref,
  ) => (
    // eslint-disable-next-line react/button-has-type
    <S.ButtonStyled
      ref={ref}
      type={type}
      disabled={disabled || isLoading}
      $variant={variant}
      {...props}
    >
      {children}
    </S.ButtonStyled>
  ),
);

Button.displayName = 'Button';
