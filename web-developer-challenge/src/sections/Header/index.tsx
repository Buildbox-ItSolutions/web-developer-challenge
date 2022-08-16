import * as S from './styles';
import logo from '../../assets/logoBuildBox.png';

export function Header() {
  return (
    <S.Header>
      <S.Img src={logo} />
    </S.Header>
  );
}
