import * as S from './style'

const Header = () => {
  return(
    <S.Header>
      <S.Title data-testid='title' to={'/'}>buildbox</S.Title>
      <S.SubTitle>WEB CHALLENGE</S.SubTitle>
    </S.Header>
  )
}

export default Header
