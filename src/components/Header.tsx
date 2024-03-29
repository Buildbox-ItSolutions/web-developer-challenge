import React from "react";
import styled from 'styled-components';

const StyledHeader = styled.header` 
  background-color: #2b2b2b;
  display: flex;

  h1 {
    color: #fff;
    font-family: "McLaren", cursive;
    font-weight: 200;
    display:flex;
    justify-content: center;
  }
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <h1>Buildbox</h1>
    </StyledHeader>
  );
}

export default Header;
