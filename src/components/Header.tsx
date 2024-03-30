import React from 'react';
import styled from 'styled-components';
import logoSVG from '../assets/bx-logo.svg';

const HeaderContainer = styled.div`
    background-color: #2b2b2b;
    height: 93px;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.img`
    max-height: 100%;
    max-width: 100%;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src={logoSVG} alt="Logo" />
    </HeaderContainer>
  );
};

export default Header;
