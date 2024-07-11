import React from "react"
import styled from "styled-components"
import logo from '../../assets/logo.jpg';

export default function Header(){
    const StyledHeader = styled.div`
        width: 100%;
        background-color: #2B2B2B;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    const StyledHeaderText = styled.p`
        color: #71BB00;
    `;
    const StyledImage = styled.img`
        width: 20;
        height: 50px;
    `;

    return <StyledHeader>
                <StyledImage src={logo}/>
        </StyledHeader>
}