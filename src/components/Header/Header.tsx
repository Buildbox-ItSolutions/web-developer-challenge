import React from 'react';
import Logo from '../../assets/logo.png';

import { Container } from '.';

const Header = () => {
  return (
    <Container>
      <img src={Logo} />
    </Container>
  );
};

export default Header;
