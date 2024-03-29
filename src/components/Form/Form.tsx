import React from 'react';
import { Background, Upload, Image, Box, Box2,Input, TextArea, Button } from "./styles";
const imageUpload = require("../../assets/images/upload.png") as string;
const image = require("../../assets/images/image.png") as string;


function Form(): JSX.Element {
  return (
    <Background>
      <Box>
        <Upload src={imageUpload} alt="Imagem de upload"/>
        <Image src={image} alt="Imagem de foto vazia"/>
      </Box>
      <Box2>
        <Input placeholder='Digite seu nome'/>
        <TextArea placeholder='Mensagem'/>
        <Box2>
          <Button>Publicar</Button>
        </Box2>
      </Box2>
    </Background>
  );
}

export default Form;
