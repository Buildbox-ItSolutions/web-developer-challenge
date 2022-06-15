import { useState } from 'react';
import { BiTrashAlt } from 'react-icons/bi';
import * as Styled from './styles';

interface Props {
  newImage: string;
  setNewImage: Blob | MediaSource;
  newName: string;
  newMessage: string;
  handleImage?: React.ChangeEventHandler;
  handleName?: React.ChangeEventHandler;
  handleMensagem?: React.ChangeEventHandler;
  handleClear: React.MouseEventHandler;
  handleSubmit?: React.FormEventHandler;
  removeImage: React.MouseEventHandler;
}

function Index({
  newImage,
  newName,
  newMessage,
  setNewImage,
  handleImage,
  handleName,
  handleMensagem,
  handleClear,
  handleSubmit,
  removeImage,
}: Props) {
  const [endImage] = useState<string>('logouser.svg');

  return (
    <Styled.Card>
      <Styled.InputImg type="file" onChange={handleImage} value={newImage} />
      <Styled.ImgWrapper>
        {setNewImage ? (
          <>
            <Styled.UserImg
              src={URL.createObjectURL(setNewImage)}
              alt="image"
            />
            <Styled.IconTrash>
              <BiTrashAlt onClick={removeImage} />
            </Styled.IconTrash>
          </>
        ) : (
          <Styled.UserImgPrev src={endImage} alt="image2" />
        )}
      </Styled.ImgWrapper>

      <Styled.InputUser
        onChange={handleName}
        value={newName}
        type="text"
        placeholder="Digite seu nome"
      />
      <Styled.InputMessage
        onChange={handleMensagem}
        value={newMessage}
        placeholder="Menssagem"
      />
      <Styled.GridButton>
        <Styled.ButtonClear onClick={handleClear}>Descartar</Styled.ButtonClear>
        <Styled.ButtonPost onSubmit={handleSubmit}>Publicar</Styled.ButtonPost>
      </Styled.GridButton>
    </Styled.Card>
  );
}

export default Index;
