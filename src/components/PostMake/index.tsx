import styled  from "styled-components";
import image from 'assets/image.svg';
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { InPost } from "pages/Main";

interface IContent {
    isActive: boolean;
  }

const Content = styled.div<IContent>`
    display:flex;
    flex-direction:column;
    width: 516px;
    height: 353px;

    margin: 40px 425px 56px;
    padding: 24px;

    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;
`;
const ImgPost = styled.img`
    width: 88px;
    height: 88px;
    
    margin: 0 8px 16px 190px;
    padding: 32px;
    object-fit: contain;
    
    border-radius: 36px;
    border: solid 1px #4b4b4b;
    background-color: rgba(75, 75, 75, 0);
`;
const NameInput = styled.input`
    width: 468px;
    height: 40px;
    margin: 16px 0 8px;
    padding: 12px 351px 11px 16px;
    border-radius: 8px;
    border:none;
    background-color: #494949;
    outline:none;
    color: #9f9f9f;
    ::placeholder{
        width: 101px;
        height: 17px;
        font-family: Roboto, sans-serif;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.29;
        letter-spacing: normal;
        text-align: left;
        color: #9f9f9f;
    }
`;
const AreaInput = styled.input`
    width: 468px;
    height: 80px;
    margin: 8px 0 22px;
    padding: 12px 382px 51px 16px;
    border-radius: 8px;
    border:none;
    background-color: #494949;
    outline:none;
    color: #9f9f9f;
`;
const WrapButtons = styled.div`
    display: flex;
    flex-direction:row;
    margin-left:12.3vw;
    width:192px;
    margin-bottom:30px;
`;
const ButtonDiscard = styled.button`
    width: 98px;
    height: 41px;
    margin: 0 0 0 24px;
    padding: 12px 24px;
    object-fit: contain;
    border-radius: 8px;
    border:none;
    background-color: #313131;

    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: center;
    color: #5f5f5f;
    text-decoration: underline;
    
`;
const ButtonPublish = styled.button`
    width: 98px;
    height: 41px;
    margin: 0 0 0 24px;
    padding: 12px 24px;
    object-fit: contain;
    border-radius: 8px;
    border:none;
    background-color: #5f5f5f;

    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: center;
    color: #313131;
`;

interface InFormPost {
    posts: InPost[];
    setPosts: Dispatch<SetStateAction<InPost[]>>;
  }
  
  interface IPostsCreate {
    data: InFormPost;
  }

export const PostMake = ({ data }: IPostsCreate) => {
    const [photo, setPhoto] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [isActive, setIsActive] = useState<boolean>(false);
    const { posts, setPosts } = data;
  
    useEffect(() => {
      if (photo && name && message) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    },
    [photo, name, message]);
    const handleClearForm = () => {
      setName("");
      setMessage("");
      setPhoto("");
    };
    const handleSelectImage = (event: any) => {
        if (event.target.files[0]) {
          const image = event.target.files[0];
          if (image.type === "image/jpeg" || image.type === "image/png") {
            setPhoto(URL.createObjectURL(event.target.files[0]));
          }
        }
      };
    const handleCreatePost = (event: any) => {
      event.preventDefault();
      if (!photo || !name || !message) {
        return alert(
          "Preencha todo o formulario"
        );
      }
      const newPost: InPost = {
        photo,
        name,
        message
      };
      
      setPosts([newPost, ...posts]);
      return handleClearForm();
    };
  
    return (
      <Content
        isActive={isActive}
        onSubmit={(event) => handleCreatePost(event)}
      >
        <label>
          <input
            type="file"
            accept="image/*"
            onChange={(event) => handleSelectImage(event)}
          />
          {photo !== "" ? (
            <ImgPost src={photo} />
          ) : (
            <ImgPost src={ImageSvg} />
          )}
        </label>
        <NameInput
          placeholder="Digite seu nome"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <AreaInput
          placeholder="Mensagem"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />
        <WrapButtons>
          <ButtonDiscard  onClick={handleClearForm}>
            Descartar
          </ButtonDiscard>
          <ButtonPublish >Publicar</ButtonPublish>
        </WrapButtons>
      </Content>
    );
  };

// export default function PostMake() {
//     return (
//         <Content>
//             <ImgPost src={image} />
//             <NameInput placeholder='Digite seu nome'/>
//             <AreaInput placeholder='Mensagem'/>
//             <WrapButtons>
//                 <ButtonDiscard>Descartar</ButtonDiscard>
//                 <ButtonPublish>Publicar</ButtonPublish>
//             </WrapButtons>
//         </Content>
//     );
// }