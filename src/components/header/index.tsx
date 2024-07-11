import React from "react"
import logo from '../../assets/logo.jpg';
import { StyledHeader, StyledImage } from "./style";

export default function Header(){
    
    return <StyledHeader>
                <StyledImage src={logo}/>
        </StyledHeader>
}