import React, { HTMLAttributes, ReactNode } from 'react'

/* style */
import * as S from './style'

interface PropsPostContainer extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const PostContainer: React.FC<PropsPostContainer> = ({
  children,
  ...props
}): React.ReactElement => {
  return <S.PostContainer {...props}>{children}</S.PostContainer>
}

export default PostContainer
