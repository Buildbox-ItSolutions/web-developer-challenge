import { FC } from 'react';

import { NavbarProps } from './model';
import { CardStyled } from './styles';

export const BixCard: FC<NavbarProps> = ({ logo, onRedirect, ...props }) => <CardStyled {...props}></CardStyled>;

BixCard.defaultProps = {
  onRedirect: () => {},
};
