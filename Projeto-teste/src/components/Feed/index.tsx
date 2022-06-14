import * as Styled from './styles';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function index() {
  return (
    <>
      <Styled.SubTitle>Feed</Styled.SubTitle>
      <Styled.Container>
        <Styled.IconDel>
          <AiOutlineCloseCircle />
        </Styled.IconDel>
        <Styled.ConatinerItens>
          <Styled.Collumn>
            <Styled.UserImg src="users.jpg" />
            <Styled.ContainerDescription>
              <Styled.Description>Description</Styled.Description>
              <Styled.GirdName>
                <Styled.SpanSubtitle>Enviado por</Styled.SpanSubtitle>
                <Styled.Name>Gustavo</Styled.Name>
              </Styled.GirdName>
            </Styled.ContainerDescription>
          </Styled.Collumn>
        </Styled.ConatinerItens>
      </Styled.Container>
    </>
  );
}

export default index;
