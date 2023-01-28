import React from 'react'

import Logo from '../assets/bx-logo.png'

import { Header, Main } from './style'

const Layout: React.FC<{children: React.ReactElement}> = ({children}) => {
  return (
    <>
      <Header>
        <img src={Logo} alt='Buildbox' />
      </Header>

      <Main>
        {children}
      </Main>
    </>
  )
}

export default Layout
