import React from 'react'

/* styles */
import * as S from './style'

/* icons */
import { RxImage } from 'react-icons/rx'

/* components */
import PostContainer from '../PostContainer'
import Input from '../Input'

const AddPost = (): React.ReactElement => {
  return (
    <PostContainer>
      <S.PostAreaAddFigure>
        <S.PostAreaSelectFigure>
          <RxImage size={24} />
        </S.PostAreaSelectFigure>
        <S.PostAreaInputs>
          <Input placeholder="Digite seu nome" />
        </S.PostAreaInputs>
      </S.PostAreaAddFigure>
    </PostContainer>
  )
}

export default AddPost
