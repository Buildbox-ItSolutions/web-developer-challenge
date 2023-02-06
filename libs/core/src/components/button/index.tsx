import { FC } from 'react';
import classNames from 'classnames';

import { ButtonProps } from './model';
import { ButtonStyled } from './styles';

export const BixButton: FC<ButtonProps> = ({
  children,
  className,
  block,
  color,
  disable,
  variant,
}) => (
  <ButtonStyled
    className={classNames({
      [className || 'button']: true,
      block: block,
      disable: disable,
      [color || 'primary']: true,
      [variant || 'solid']: true,
    })}
  >
    {children}
  </ButtonStyled>
);
