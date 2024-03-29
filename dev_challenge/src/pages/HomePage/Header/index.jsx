import React from "react";
import Logo from "../../../assets/bx-logo.png";
import styles from './style.module.scss';


export const Header = () => {
    return (
        <header>
            <img src={Logo} alt="logo"/>
        </header>
    );
}