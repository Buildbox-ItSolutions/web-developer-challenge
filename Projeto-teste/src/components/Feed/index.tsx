import * as Styled from './styles';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface Props {
  posts: any[];
  handDelete: any;
}

function Index({ posts, handDelete }: Props) {
  return (
    <>
      <Styled.SubTitle>Feed</Styled.SubTitle>
      {posts.map((post, index) => (
        <Styled.Container key={post.id}>
          <Styled.IconDel>
            {/* Bottum Delet */}
            <AiOutlineCloseCircle onClick={(e) => handDelete(e, index)} />
          </Styled.IconDel>
          <Styled.ContainerItens>
            <Styled.Column>
              <Styled.UserImg src={post.img} alt="img User" />
              <Styled.ContainerDescription>
                <Styled.Description>{post.body}</Styled.Description>
                <Styled.GirdName>
                  <Styled.SpanSubtitle>Enviado por</Styled.SpanSubtitle>
                  <Styled.Name>{post.name}</Styled.Name>
                </Styled.GirdName>
              </Styled.ContainerDescription>
            </Styled.Column>
          </Styled.ContainerItens>
        </Styled.Container>
      ))}
    </>
  );
}

export default Index;
