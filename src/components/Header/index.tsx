import logo from '@assets/logo.png';

import * as S from './styles';

export function Header() {
  return (
    <S.Header>
      <S.Img src={logo} />
    </S.Header>
  );
}
