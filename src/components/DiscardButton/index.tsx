import React from 'react'
import defaultTheme from '../../theme/defaultTheme'
import * as S from './style'

interface DiscardButtonProps {
  discardPostClick: () => void
}

const DiscardButton: React.FC<DiscardButtonProps> = ({ discardPostClick }) => {
  return (
    <S.Wrapper onClick={discardPostClick} theme={defaultTheme}>
      Descartar
    </S.Wrapper>
  )
}

export default DiscardButton
