import React from 'react';
import { Container } from './style';

const Header: React.FC = () => {
  return (
    <Container>
        <img src={'/bx-logo.png'} srcSet={'/bx-logo@2x.png 2x, /bx-logo@3x.png 3x'} alt="Buildbox Web Challenge logo"/>
    </Container>
  );
}

export default Header;
