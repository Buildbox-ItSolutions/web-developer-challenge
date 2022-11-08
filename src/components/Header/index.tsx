import React from 'react';
import styled from 'styled-components'


const Nav = styled.nav`
    padding: 10px 0;
`;

const Img = styled.img`
    height: 50px;  
    width: 120px; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;



export default function Header() {
    return (
        <Nav className='container-fluid bg-dark gx-0'>
            <Img className="navbar-brand buildboxLogo" src="https://cdn.zeplin.io/5c784f73981c3b6256bb7256/assets/c105ef72-baf1-405b-aea9-bb9a57c860f8.png" alt='buildboxLogo' />
        </Nav>
    )
}