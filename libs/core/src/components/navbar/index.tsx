import { FC } from 'react';

import { NavbarProps } from './model';
import { NavbarStyled } from './styles';

export const BixNavbar: FC<NavbarProps> = ({ logo, onRedirect, ...props }) => (
  <NavbarStyled {...props}>
    <img onClick={() => onRedirect()} src={logo.src} alt={logo.alt} />
  </NavbarStyled>
);
BixNavbar.defaultProps = {
  onRedirect: () => {},
};
