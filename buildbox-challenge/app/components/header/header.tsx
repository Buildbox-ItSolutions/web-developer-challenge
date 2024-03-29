"use client"
import Image from "next/image";
import { HeaderContainer } from "./headerSyles";
import Link from "next/link";

const Header = () => {
    return ( 
        <HeaderContainer>
            <Link href="/">
                <Image
                    src="/bx-logo.svg"
                    width={103}
                    height={45}
                    alt="Logo Buildbox"
                />
            </Link>
        </HeaderContainer>
     );
}

 
export default Header;