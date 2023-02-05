import { BixNavbar, NavbarLogo } from '@bix/core';

import { IndexStyled } from './styles';

const Index = () => {
  const logo: NavbarLogo = {
    src: '/bx-logo@3x.png',
    alt: 'Bix',
  };
  return (
    <IndexStyled>
      <BixNavbar logo={logo} onRedirect={() => {}} />
    </IndexStyled>
  );
};

export default Index;
