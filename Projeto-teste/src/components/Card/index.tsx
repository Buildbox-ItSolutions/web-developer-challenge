import { useState } from 'react';
import { BiTrashAlt } from 'react-icons/bi';
import * as Styled from './styles';

interface Props {
  newPost?: string | number | readonly string[] | undefined;
  handleName?: React.ChangeEventHandler;
  handleMensagem?: React.ChangeEventHandler;
  handleClear: React.MouseEventHandler;
  handleSubmit?: React.FormEventHandler;
}

function Index({
  newPost,
  handleName,
  handleMensagem,
  handleClear,
  handleSubmit,
}: Props) {
  const [image, setImage] = useState<any>('');
  const [endImage] = useState<any>('logouser.svg');

  const LoadImage = (e: any) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const removeImage = () => {
    setImage('');
  };

  return (
    <Styled.Card>
      <Styled.InputImg type="file" onChange={LoadImage} value={newPost} />
      <Styled.ImgWrapper>
        {image ? (
          <>
            <Styled.UserImg src={URL.createObjectURL(image)} alt="image" />
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
        value={newPost}
        type="text"
        placeholder="Digite seu nome"
      />
      <Styled.InputMessage
        onChange={handleMensagem}
        value={newPost}
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
