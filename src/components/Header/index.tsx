/* eslint-disable @next/next/no-img-element */
import * as S from './styles'

const Header = () => {
  const image = '/img/logo.png'
  return (
    <S.Wrapper>
      <img width="103px" height="45px " src={image} />
    </S.Wrapper>
  )
}

export default Header
