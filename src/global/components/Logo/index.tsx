import { RESOURCES } from '@config/routes/resources';

import { Logo } from './styles';

export function LogoComponent() {
  return (
    <Logo to={RESOURCES.Home.path}>
      <span>buildbox</span>
      <span>WEB CHALLENGE</span>
    </Logo>
  );
}
