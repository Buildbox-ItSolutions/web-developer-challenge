import React from "react";
import styled from 'styled-components';
import logo from '../assets/bx-logo/bx-logo@2x.png';

const StyledHeader = styled.header` 
    background-color: #2b2b2b;
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;

  img {
    width: 50%; 
    height: auto; 
    margin: auto;
    padding: 1rem;
  }

  @media only screen and (min-width: 1200px) {
    img {
      width: 10%;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="Logo" />
    </StyledHeader>
  );
}

export default Header;
