import React from 'react';
import { MainContainer } from '../../global';
import logo from '../../assets/bx-logo.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
      <Container>
          <MainContainer>
            <img src={logo} alt="Logo"/>
          </MainContainer>
      </Container>
  )
}

export default Header;