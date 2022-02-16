import React from 'react'
import defaultTheme from '../../theme/defaultTheme'
import * as S from './style'

interface PublicButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined
  disabled?: boolean
}

const PublicButton: React.FC<PublicButtonProps> = ({ type, disabled }) => {
  return (
    <S.Wrapper disabled={disabled} theme={defaultTheme} type={type}>
      Publicar
    </S.Wrapper>
  )
}

export default PublicButton
