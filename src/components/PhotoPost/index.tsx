import React from 'react'
import * as S from './style'

interface PhotoPostProps {
  photo: string
  alt: string
}

const PhotoPost: React.FC<PhotoPostProps> = ({ photo, alt }) => {
  return (
    <S.Wrapper>
      <img src={photo} alt={alt} />
    </S.Wrapper>
  )
}

export default PhotoPost
