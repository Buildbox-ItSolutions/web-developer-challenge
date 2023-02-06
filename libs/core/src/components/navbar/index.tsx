import { FC } from 'react';

import { NavbarProps } from './model';
import { NavbarStyled } from './styles';

export const BixNavbar: FC<NavbarProps> = ({ ...props }) => (
  <NavbarStyled {...props}>{props.children}</NavbarStyled>
);
