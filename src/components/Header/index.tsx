import React from "react";
import * as S from './styles';
import bxLogo from '../../assets/images/bx-logo.png'


export function Header(){
    return(
        <S.Header>
            <img src={bxLogo} alt="Buildbox logo" />
        </S.Header>
    )
}
