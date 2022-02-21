import React from 'react'
import styled from 'styled-components';
import { GlobalWrapper } from '../GlobalWrapper';
import logo from '../img/bx-logo.svg';

const Header = () => {
  return (
    <HeaderStyle>
        <GlobalWrapper>
            <img src={logo} alt='logo brand' />
        </GlobalWrapper>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.header`
    width:100%;
    height: 93px;
    padding: 24px 0;
    background-color: #2b2b2b;
`;

export default Header