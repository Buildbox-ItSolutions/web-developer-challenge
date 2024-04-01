import React from 'react'
import { NavbarStyled } from './Navbar.style'
import buildBoxLogo from '../../../../assets/bx-logo@3x.png'; 


function Navbar() {
  return (
    <NavbarStyled>
        <div className='container'>
            <img className='logo' src={buildBoxLogo} alt="logo of buildbox company" />
        </div>
    </NavbarStyled>
  )
}

export default Navbar