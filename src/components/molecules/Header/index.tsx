import React from 'react';

import * as H from './styles'
import logo from '../../../assets/bx-logo.png'

const Header: React.FC = () => {
  return (
    <H.Container>
      <img src={logo} alt="" />
    </H.Container>
  )
}

export default Header