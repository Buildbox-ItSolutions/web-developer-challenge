import React from 'react';

import { Container } from './styles';

import logo from '../../images/bx-logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="BX Logo" />
    </Container>
  );
};

export default Header;
