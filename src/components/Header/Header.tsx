import React from 'react';
import { HeaderContainer, Logo } from './styles';
import imageLogo from '../../assets/images/bx-logo.png';

const Header:React.FC = () => {
    return (
        <HeaderContainer>
            <Logo src={imageLogo} />
        </HeaderContainer>
    );
};

export default Header;