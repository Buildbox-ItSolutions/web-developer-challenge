import { FC } from 'react';
import classNames from 'classnames';

import { ButtonProps } from './model';
import { ButtonStyled } from './styles';

export const BixButton: FC<ButtonProps> = ({ children, className, color, variant, ...props }) => (
  <ButtonStyled {...props} className={classNames({ [className || 'button']: true, [color || 'primary']: true, [variant || 'solid']: true })}>
    {children}
  </ButtonStyled>
);
