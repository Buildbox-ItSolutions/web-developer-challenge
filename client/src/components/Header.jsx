import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/bx-logo.png';

const Header = () => {
  return (
    <header className='w-full flex justify-center items-center bg-[#2b2b2b] sm:px-8 px-4 py-4 border-b border-b-[#232323]'>
      <Link to='/'>
        <img src={logo} alt='buildbox logo' className='w-24' />
      </Link>
    </header>
  );
};

export default Header;
