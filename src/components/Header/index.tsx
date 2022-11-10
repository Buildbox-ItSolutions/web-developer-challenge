import React from 'react';
import { useState } from 'react';
import { HeaderContainer } from './styles';
import LogoImg from '../../assets/bx-logo.png'

const Header = () => {
  const [data, setData] = useState();


  return (
    <HeaderContainer>
      <img src={LogoImg} alt="BuildBox" className='logo' />
    </HeaderContainer>
  )
}

export default Header;