import React from 'react'
import { Navbar } from './style'
import Logo from '../../assets/img/logo.png'
import { Button, Image } from '../index';
import { useNavigate } from 'react-router-dom';


export function Header() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate('/');
  }

  return (
    <>
      <Navbar>
          <div className='navbar__logo' onClick={() => navigate('/')}>
              <Image src={Logo} alt='Logo' behavior='contain'/>
          </div>
          <div className='navbar__button'>
            {/* <Button onClick={()=> handleNavigate()}>Novo Post</Button> */}
          </div>
      </Navbar>
    </>
  )
}

