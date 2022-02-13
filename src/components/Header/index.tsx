import React from 'react'
import Logo from '../../assets/bx-logo.png'
import * as S from './style'

const Header: React.FC = () => {
  return (
    <S.Wrapper>
      <img src={Logo} alt="Logo escrito 'buildbox web challenge'" />
    </S.Wrapper>
  )
}

export default Header
