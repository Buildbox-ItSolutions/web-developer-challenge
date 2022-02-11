import React, { useState } from 'react'

import { Container, ImageCollected, ImageCollector } from './styles'
import imageIcon from '../../assets/icons/image.svg'

function ImageWrapper() {
  const [hasImage, setHasImage] = useState(false);

  return (
    <Container>
      {
        hasImage ?
        <ImageCollected /> :
        <ImageCollector>
          <img src={imageIcon} alt="" />
        </ImageCollector>
      }
    </Container>
  )
}

export default ImageWrapper