import React, { HTMLAttributes } from 'react'

/* style */
import * as S from './style'

type PostAreaProps = HTMLAttributes<HTMLDivElement>

const PostAreaSelectFigure: React.FC<PostAreaProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return <S.PostAreaSelectFigure {...props}>{children}</S.PostAreaSelectFigure>
}

export default PostAreaSelectFigure
