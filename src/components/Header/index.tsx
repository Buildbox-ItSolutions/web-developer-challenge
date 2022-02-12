import React from 'react'
import { Navbar } from './style'
import Logo from '../../assets/img/logo.png'
import { Image } from '../Image'
import { Button } from '../index';

export function Header() {
  return (
    <>
        <Navbar>
            <div className='navbar__logo'>
                <Image src={Logo} alt='Logo' behavior='contain'/>
            </div>
            <div className='navbar__button'>
              <Button onClick={()=> console.log('asda')}>Novo Post</Button>
            </div>
        </Navbar>
    </>
  )
}
