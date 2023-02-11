import React, { ReactNode } from 'react'

/* style */
import * as S from './style'

type PropsContainer = {
  children: ReactNode
}

const Container: React.FC<PropsContainer> = ({
  children
}): React.ReactElement => {
  return (
    <S.Container>
      <S.ContainerPost>{children}</S.ContainerPost>
    </S.Container>
  )
}

export default Container
