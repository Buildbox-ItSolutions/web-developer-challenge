import React from 'react'
import { UploadedImageStyled } from './UploadedImage.style';

interface IUploadedImage{
    src: string;
    alt?: string;
}

function UploadedImage({src, alt}: IUploadedImage) {
  return (
    <UploadedImageStyled src={src} alt={alt} />
  )
}

export default UploadedImage;