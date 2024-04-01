import React, { useState } from 'react';
import { ContainerForm, ContainerImage, ImageUpload, ImageWithoutBackground, IllustrativePicture, ContainerInputs, ContainerButtons, Input, TextArea, Button } from './styles';
const imageWithoutBackground = require("../../../assets/images/upload.png") as string;
const profile2 = require("../../../assets/images/photo-base2.png") as string;
const illustrativePicture = require("../../../assets/images/image.png") as string;
const trash = require("../../../assets/images/trash.png") as string;

interface FormProps {
  feeds: { photo: string; name: string; text: string; }[];
  setFeeds: React.Dispatch<React.SetStateAction<{ photo: string; name: string; text: string; }[]>>;
}

function Form({ feeds, setFeeds }: FormProps): JSX.Element {
  const [imageSource, setImageSource] = useState<string>(imageWithoutBackground);
  const imageClicked = imageSource === profile2;
  const publishPost = {
    photo: profile2,
    name: 'Manuela Oliveira',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.',
  }

  const handleImageClick = () => {
    setImageSource(imageClicked ? imageWithoutBackground : profile2);
  };

  const addFeed = () => {
    const newArray = [publishPost, ...feeds];
    setFeeds(newArray);
  }

  const removeFeed = () => {
    if (feeds.length >= 3) {
      setFeeds(prevFeeds => {
      const newArray = prevFeeds.slice(1);
      return newArray;
    });
  }
  }

  return (
    <ContainerForm>
      <ContainerImage>
        <ImageUpload
          src={imageSource} 
          alt="Imagem de upload" 
          onClick={() => {
            handleImageClick()
            removeFeed()
          }} 
        />
        <ImageWithoutBackground 
          src={trash} 
          alt="trash, delete"
          onClick={() => {
            setImageSource(imageWithoutBackground)
            removeFeed()
          }}  
          />
          {!imageClicked && <IllustrativePicture src={illustrativePicture} alt="Imagem de foto vazia" />}
      </ContainerImage>
      <ContainerInputs>
          <Input placeholder="Digite seu nome" value={imageClicked ? publishPost.name : ""}/>
          <TextArea placeholder="Mensagem" value={imageClicked ? publishPost.text : ""}
          />
          <ContainerButtons>
              <p aria-label="Descartar" onClick={() => setImageSource(imageWithoutBackground)}>
                Descartar
              </p>
              <Button
                bgColor={imageClicked ? "success" : "grey200"}
                color={imageClicked ? "white" : 'grey700'}
                onClick={() => {
                  if(imageClicked) {
                    addFeed()
                    setImageSource(imageWithoutBackground)
                  }
                }}
              >
                Publicar
              </Button>
          </ContainerButtons>
      </ContainerInputs>
    </ContainerForm>
  );
}

export default Form;
