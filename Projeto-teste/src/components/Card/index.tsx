import { useState } from 'react';
import { BiTrashAlt } from 'react-icons/bi';
import * as Styled from './styles';

interface Props {
  newImage: any;
  setNewImage: any;
  newName: string;
  newMessage: string;
  handleImage: React.ChangeEventHandler;
  handleName: React.ChangeEventHandler;
  handleMensagem: React.ChangeEventHandler;
  handleClear: React.FormEventHandler<HTMLDivElement> | undefined;
  handleSubmit: React.FormEventHandler<HTMLDivElement> | undefined;
  removeImage: React.MouseEventHandler;
}

function Index({
  newImage,
  newName,
  newMessage,
  handleImage,
  handleName,
  handleMensagem,
  handleClear,
  handleSubmit,
  removeImage,
}: Props) {
  const [endImage] = useState<string>('logouser.svg');
  const [active] = useState<any>('');

  return (
    <Styled.Card>
      <Styled.InputImg type="file" onChange={handleImage} accept="image/*" />
      <Styled.ImgWrapper>
        {newImage ? (
          <>
            <Styled.UserImg src={newImage} alt="image" />
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
        required
      />
      <Styled.InputMessage
        onChange={handleMensagem}
        value={newMessage}
        placeholder="Menssagem"
        required
      />
      <Styled.GridButton>
        {newName || newImage || newMessage ? (
          <Styled.ButtonClear
            onClick={handleClear}
            style={{ pointerEvents: active }}
          >
            Descartar
          </Styled.ButtonClear>
        ) : (
          <Styled.ButtonClear
            onClick={handleClear}
            style={{ pointerEvents: 'none' }}
          >
            Descartar
          </Styled.ButtonClear>
        )}

        {newName && newImage && newMessage ? (
          <Styled.ButtonPostActive onClick={handleSubmit}>
            Publicar
          </Styled.ButtonPostActive>
        ) : (
          <Styled.ButtonPost onClick={handleSubmit}>Publicar</Styled.ButtonPost>
        )}
      </Styled.GridButton>
    </Styled.Card>
  );
}

export default Index;
