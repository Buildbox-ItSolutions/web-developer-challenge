import React from 'react'

/* styles */
import * as S from './style'

/* components */
import PostContainer from '../PostContainer'

const AddPost = (): React.ReactElement => {
  return (
    <PostContainer>
      <S.PostAreaAddFigure>
        <S.PostAreaSelectFigure></S.PostAreaSelectFigure>
      </S.PostAreaAddFigure>
    </PostContainer>
  )
}

export default AddPost
