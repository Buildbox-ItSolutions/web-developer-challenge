import React from 'react';
import { Container } from './style';

const Header: React.FC = () => {
  return (
    <Container>
        <img src={'/bx-logo.png'} alt="Buildbox Web Challenge logo"/>
    </Container>
  );
}

export default Header;
