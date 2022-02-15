import React from 'react'
import defaultTheme from '../../theme/defaultTheme'
import * as S from './style'

interface PublicButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined
}

const PublicButton: React.FC<PublicButtonProps> = ({ type }) => {
  return (
    <S.Wrapper theme={defaultTheme} type={type}>
      Publicar
    </S.Wrapper>
  )
}

export default PublicButton
