import Logo from "../../../../assets/images/bx-logo.png";

import * as S from "./styles";
export default function Header() {
  return (
    <S.Container>
      <picture>
        <S.Logo src={Logo} alt="logo" />
      </picture>
    </S.Container>
  );
}
