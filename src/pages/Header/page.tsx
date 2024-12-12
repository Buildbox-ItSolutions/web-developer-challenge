"use client";
import { Container } from "./style";
import Image from "next/image";

const Header = () => {
  return (
    <Container>
      <Image src={"/bx-logo@3x.png"} alt={"logo"} width={100} height={100} />
    </Container>
  );
};

export default Header;
