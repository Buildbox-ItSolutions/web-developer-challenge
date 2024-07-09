import * as S from './style'

const NotFound = () => {
  return (
    <S.Page>
      <h1>404</h1>
      <h2>Página não encontrada!</h2>
      <S.HomeLink to={'/'}>Acessar página Inicial</S.HomeLink>
    </S.Page>
  )
}
  
export default NotFound
