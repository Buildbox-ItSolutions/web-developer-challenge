import React from 'react'
import { Container } from "./HeaderStyles"
import Image from 'next/image';
import bxLogo from "../../../public/bx-logo.svg"

function Header() {
  return (
    <Container>
        <Image src={bxLogo} alt='logo'></Image>
    </Container>
  )
}

export default Header;
