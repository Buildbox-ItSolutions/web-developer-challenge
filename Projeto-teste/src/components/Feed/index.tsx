import * as Styled from './styles';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface Props {
  posts: [];
  handDelete: () => void;
}

function Index({ posts, handDelete }: Props) {
  // const posts = [
  //   {
  //     name: 'Gustavo Fernandes',
  //     img: 'users.jpg',
  //     body: 'Lorem Ipsum is simply dummy text of the printing psum is simply dummy text of the printing and typesettinpsum is simply dummy text of the printing and typesettinpsum is simply dummy text of the printing and typesettinv and typesettin',
  //   },

  //   {
  //     name: 'Gustavo Fernandes',
  //     img: 'users.jpg',
  //     body: 'Lorem Ipsum is simply dummy text of the printing psum is simply dummy text of the printing and typesettinpsum is simply dummy text of the printing and typesettinpsum is simply dummy text of the printing and typesettinv and typesettin',
  //   },

  //   {
  //     name: 'Gustavo Fernandes',
  //     img: 'users.jpg',
  //     body: 'Lorem Ipsum is simply dummy text of the printing psum is simply dummy text of the printing and typesettinpsum is simply dummy text of the printing and typesettinpsum is simply dummy text of the printing and typesettinv and typesettin',
  //   },
  // ];

  return (
    <>
      <Styled.SubTitle>Feed</Styled.SubTitle>
      {posts.map((post, index) => (
        <Styled.Container key={post.name}>
          <Styled.IconDel>
            {/* Bottum Delet */}
            <AiOutlineCloseCircle onClick={(e) => handDelete(e, index)} />
          </Styled.IconDel>
          <Styled.ContainerItens>
            <Styled.Column>
              <Styled.UserImg src={post.img} />
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
