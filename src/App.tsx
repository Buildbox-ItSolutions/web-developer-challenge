import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts, usePosts, toFavorite, toDelete } from "./redux/slicePosts";
import {
  Container,
  PostImgPhoto,
  PostInformatcion,
  ContentLoren,
  ContainerPost,
  ContentInput,
  Post,
  ButtonDiv,
  ButtonPub,
  ImgPhoto,
  ImgDelete,
  Content,
  ContentPost,
  SpanMessage,
  SpanName,
  SpanEnviadoPor,
  SpanFeed
} from './styles';


function App() {

  const posts = useSelector(usePosts);

  const [newPostName, setNewPostName] = useState("");
  const [newPostMessage, setNewPostMessage] = useState("");
  const [newPostId, setNewPostId] = useState(4)
  const [newPostImg, setNewPostImg] = useState('img/photo-upload.png')

  const dispatch = useDispatch();

  interface Posts {
    id: number,
    name: string;
    message: string,
    favorite: boolean;
  }

  function handlePost() {
    setNewPostId(newPostId + 1)
    const newPost = {
      id: newPostId,
      name: newPostName,
      message: newPostMessage,
      favorite: false
    }
    setNewPostMessage('');
    setNewPostName('');
    setNewPostImg('img/photo-base.png')
    dispatch(addPosts((newPost)))
  }

  function handleInformFields() {
    setNewPostImg('img/photo-base.png')
    setNewPostMessage('Lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-Nulla-mattis-ligula-vel-velit-scelerisque-iaculis-Nam-mattis-justo-id-orci-commodo-eu-tempus-purus-cursus');
    setNewPostName('Manuela Oliveira');
  }

  function handleDelete(deletePost: Posts) {
    dispatch(toDelete(deletePost))
  }

  return (
    <Container>
      <ContainerPost>
        <Content>

          <ImgPhoto
            src={newPostImg}
            alt="MyImage"
            onClick={() => handleInformFields()}
          >
          </ImgPhoto>

          <ContentInput
          onClick={() => handleInformFields()}
          >
            <input
              placeholder='Digite seu nome'
              type="text"
              disabled={true}
              value={newPostName}
              onChange={(e) => setNewPostName(e.target.value)}
              onClick={() => handleInformFields()}
            />
            <textarea
              placeholder='Mensagem'
              value={newPostMessage}
              disabled={true}
              onChange={(e) => setNewPostMessage(e.target.value)}
              onClick={() => handleInformFields()}
            />
          </ContentInput>

          <ButtonDiv>
            <ButtonPub
              type="button"
              onClick={() => handlePost()}
              disabled = {!newPostMessage && !newPostName}          
            >
              Publicar
            </ButtonPub>
          </ButtonDiv>

        </Content>

        <SpanFeed>Feed</SpanFeed>
        <ContentPost>
          {posts.map((post) => {
            return (
              <Post key={post.id} id={post.id} >
                <PostImgPhoto style={{ width: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ImgPhoto 
                    src= 'img/photo-base.png'
                  />
                </PostImgPhoto>
                <PostInformatcion>
                  <ButtonDiv>
                    <ImgDelete
                      src='img/delete.png'
                      onClick={() => handleDelete(post)}
                    />
                  </ButtonDiv>
                  <ContentLoren>
                    <SpanMessage>{post.message}</SpanMessage>
                  </ContentLoren>
                  <div><SpanEnviadoPor>Enviado Por</SpanEnviadoPor></div>
                  <div><SpanName>{post.name}</SpanName></div>
                </PostInformatcion>
              </Post>

            );
          })}
        </ContentPost>
      </ContainerPost>
    </Container >
  );
}

export default App;
