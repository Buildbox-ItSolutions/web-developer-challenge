import React from 'react'
import defaultTheme from '../../theme/defaultTheme'
import * as S from './style'

interface PhotoPostProps {
  photo: string
  alt: string
}

const PhotoPost: React.FC<PhotoPostProps> = ({ photo, alt }) => {
  return (
    <S.Wrapper theme={defaultTheme}>
      <img src={photo} alt={alt} />
    </S.Wrapper>
  )
}

export default PhotoPost
