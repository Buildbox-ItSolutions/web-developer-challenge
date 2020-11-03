import React from 'react';
import { Container, Logo } from './styles';
import logo from '../../assets/bx-logo.png';
const Header = () => {
  return (
    <Container>
      <Logo src={logo} />
    </Container>
  );
};

export default Header;
