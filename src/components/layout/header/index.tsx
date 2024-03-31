import React from 'react'
import Logo from '../../../assets/img/logo.png'
import { SContainer, SImg } from './styled'

function Header(): JSX.Element {
  return (
    <>
      <SContainer>
        <SImg src={Logo} />
      </SContainer>
    </>
  )
}

export default Header
