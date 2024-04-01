import styled from "styled-components";

export const NavbarStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2b2b2b;
    height: 93px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;

    .logo {
        width: 120px;
    }

    .container{
        max-height: 45px;
    }
`