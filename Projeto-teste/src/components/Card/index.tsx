import { useState } from 'react';
import * as Styled from './styles';

function Index() {
  const [image, setImage] = useState<any>('');
  const [endImage] = useState<any>('logouser.svg');

  const LoadImage = (e: any) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  return (
    <Styled.Card>
      <Styled.InputImg type="file" onChange={LoadImage} />
      <Styled.ImgWrapper>
        {image ? (
          <Styled.UserImg src={URL.createObjectURL(image)} alt="image" />
        ) : (
          <Styled.UserImgPrev src={endImage} alt="image2" />
        )}
      </Styled.ImgWrapper>

      <Styled.InputUser type="text" placeholder="Digite seu nome" />
      <Styled.InputMessage placeholder="Menssagem" />
      <Styled.GridButton>
        <Styled.ButtonDel>Descartar</Styled.ButtonDel>
        <Styled.ButtonPost>Publicar</Styled.ButtonPost>
      </Styled.GridButton>
    </Styled.Card>
  );
}

export default Index;
