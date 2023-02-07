import React, { ReactNode } from 'react'

/* style */
import * as S from './style'

type PropsPostContainer = {
  children: ReactNode
}

const PostContainer: React.FC<PropsPostContainer> = ({
  children
}): React.ReactElement => {
  return <S.PostContainer>{children}</S.PostContainer>
}

export default PostContainer
