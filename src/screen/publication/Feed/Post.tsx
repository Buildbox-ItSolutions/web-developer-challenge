import React from 'react';
import { ImageProfile, ContainerPost, ContainerDeleteButton, ButtonDelete, ContainerPhotoMesage, TextLorem, TextSend, TextName } from './styles';
const deleteButton = require("../../../assets/images/delete.png") as string;

interface PostProps {
  profile: string;
  name: string;
  text: string;
  onDeleteClick?: () => void;
  addCursor?: boolean;
}

function Post({ profile, name, text, onDeleteClick, addCursor }: PostProps): JSX.Element {
  console.log("onDeleteClick, addCursor", onDeleteClick, addCursor)
  return (
    <>
        <ContainerPost>
            <ContainerDeleteButton>
                <ButtonDelete
                  src={deleteButton} 
                  alt="delete button" 
                  onClick={onDeleteClick} 
                  style={addCursor ? { cursor: 'pointer' } : {}}
                />
            </ContainerDeleteButton>
          <ContainerPhotoMesage>
              <ImageProfile src={profile} alt="Photo feed"/>
              <div>
                <TextLorem>{text}</TextLorem>
                <TextSend>Enviado por</TextSend>
                <TextName>
                  {name}
                </TextName>  
              </div>
          </ContainerPhotoMesage>
        </ContainerPost>
    </>
  );
}

export default Post;
