import React from 'react'
import { Container, PicWrapper } from './AvatarStyles'

interface Props {
  image: string;
}

function Avatar( {image } : Props ) {

  return (
    <Container>
        <PicWrapper>
            <img src={image}></img>
        </PicWrapper>
    </Container>
  )
}

export default Avatar