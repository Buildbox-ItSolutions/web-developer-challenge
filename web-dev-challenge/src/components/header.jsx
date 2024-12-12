import React from 'react';
import builName from '../images/bx-logo@3x.png';
import { HeaderLogo } from '../style/headerStyle';

function header() {
  return (
    <HeaderLogo>
      <img src={builName} alt="Logo Buildbox" />
    </HeaderLogo>
  );
}

export default header;
