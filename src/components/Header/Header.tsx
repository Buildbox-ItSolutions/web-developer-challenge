import React from "react";
import bxLogo  from "../../assets/imgs/bxLogo.svg";
import { Container } from "./styles";

const Header = () => {
    return (
        <Container>
            <img src={bxLogo} alt="Logo Build Box" />
        </Container>
    );
};

export default Header;
