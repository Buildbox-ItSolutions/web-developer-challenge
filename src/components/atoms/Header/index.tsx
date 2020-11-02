import React from 'react';

import { Container } from './styles';

import bxLogo from '../../../assets/images/bx-logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={bxLogo} alt="Logo da empresa" />
    </Container>
  );
};

export default Header;
