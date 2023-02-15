import * as S from "./style";

export const Navbar = () => {
  return (
    <S.Container>
      <S.LogoWrapper>
        <S.LogoLink href="https://buildbox.com.br">
          <S.Logo>buildbox</S.Logo>
          <S.SubLogo>WEB CHALLENGE</S.SubLogo>
        </S.LogoLink>
      </S.LogoWrapper>
    </S.Container>
  );
};
