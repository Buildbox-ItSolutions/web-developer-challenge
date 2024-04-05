import bxLogo from '../../../assets/images/bx-logo.png';

import * as S from './styles';

export function Header() {
  return (
    <S.HeaderContainer>
      <img src={bxLogo} alt="BuildBox ItSolutions Logo" />
    </S.HeaderContainer>
  );
}
