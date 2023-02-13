import React from "react";
import * as S from "./style";

export const Navbar = () => {
  return (
    <S.Container>
      <a href="https://buildbox.com.br">
        <S.LogoWrapper>
          <S.Logo>buildbox</S.Logo>
          <S.SubLogo>WEB CHALLENGE</S.SubLogo>
        </S.LogoWrapper>
      </a>
    </S.Container>
  );
};
