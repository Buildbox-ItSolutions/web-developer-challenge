import React from 'react';
import { Container, ContainerPhotoMesage } from './styles';
import { SharedImage } from '../../styles/sharedStyles';
const photo1 = require("../../assets/images/photo-base.png") as string;

function Feed(): JSX.Element {
  return (
    <>
      Feed
      <Container>
        <ContainerPhotoMesage>
          <SharedImage src={photo1} alt="Photo feed"/>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam id,
             distinctio modi provident quis fuga aspernatur dolor, in unde nesciunt 
             tempora molestiae voluptates. Possimus, minus dolor quibusdam delectus
              fugit cupiditate?
          </p>
        </ContainerPhotoMesage>
      </Container>
    </>
  );
}

export default Feed;