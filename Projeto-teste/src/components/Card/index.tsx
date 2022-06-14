import * as Styled from './styles';

function index() {
  return (
    <Styled.Card>
      <Styled.UserImg src="logouser.svg" />
      <Styled.LabelUser type="text" placeholder="Digite seu nome" />
      <Styled.LabelMessage placeholder="Menssagem" />
      <Styled.GridButton>
        <Styled.ButtonDel>Descartar</Styled.ButtonDel>
        <Styled.ButtonPost>Publicar</Styled.ButtonPost>
      </Styled.GridButton>
    </Styled.Card>
  );
}

export default index;
