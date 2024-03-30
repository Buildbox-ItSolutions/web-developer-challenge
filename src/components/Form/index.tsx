import React from 'react';
import { Background, Image, Container, ContainerInputs,Input, TextArea } from "./styles";
import { SharedImage } from '../../styles/sharedStyles';
const imageUpload = require("../../assets/images/upload.png") as string;
const image = require("../../assets/images/image.png") as string;


function Form(): JSX.Element {
  return (
    <Background>
      <Container>
        <SharedImage src={imageUpload} alt="Imagem de upload"/>
        <Image src={image} alt="Imagem de foto vazia"/>
      </Container>
      <ContainerInputs>
        <Input placeholder='Digite seu nome'/>
        <TextArea placeholder='Mensagem'/>
        <div>
          <p>Descartar</p>
          <button>Publicar</button>
        </div>
      </ContainerInputs>
    </Background>
  );
}

export default Form;
