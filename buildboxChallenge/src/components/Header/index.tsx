import React from 'react'
import { Navbar } from './style'
import Logo from '../../assets/img/logo.png'
import { Button, Image } from '../index';
import { useNavigate } from 'react-router-dom';
import { AiOutlineFileAdd } from 'react-icons/ai';

export function Header() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate('/addnews');
  }

  return (
    <>
      <Navbar>
          <div className='navbar__logo' onClick={() => navigate('/')}>
              <Image src={Logo} alt='Logo' behavior='contain'/>
          </div>
          <div className='navbar__button'>
            <Button onClick={()=> navigate('/addnews')}><AiOutlineFileAdd size='20px'/></Button>
          </div>
      </Navbar>
    </>
  )
}

