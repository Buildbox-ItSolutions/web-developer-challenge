import React from 'react'
import Logo from '../../assets/bx-logo.png'
import defaultTheme from '../../theme/defaultTheme'
import * as S from './style'

const Header: React.FC = () => {
  return (
    <S.Wrapper theme={defaultTheme}>
      <img src={Logo} alt="Logo escrito 'buildbox web challenge'" />
    </S.Wrapper>
  )
}

export default Header
