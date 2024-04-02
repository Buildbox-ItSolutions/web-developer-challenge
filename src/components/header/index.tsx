import React from 'react';
import styled from 'styled-components';

import Logo from '../icons/bx-logo.png';
import Logo2x from '../icons/bx-logo@2x.png';
import Logo3x from '../icons/bx-logo@3x.png';

const StyledHeader = styled.header`
    width: 100vw;
    height: 93px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2b2b2b;
    position: fixed;
`;

const StyledLogo = styled.img`
    width: 103px;
    height: 45px;
    object-fit: contain;
`;

export default function Header() {
    return (
        <StyledHeader>
                <StyledLogo src={Logo} alt="Logo" srcSet={`${Logo} 1x, ${Logo2x} 2x, ${Logo3x} 3x`} />
        </StyledHeader>
    );
}
