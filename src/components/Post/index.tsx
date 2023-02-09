import React from 'react'

/* style */
import * as S from './style'

/* icons */
import { SlClose } from 'react-icons/sl'

/* components */
import PostContainer from '../PostContainer'
import PostAreaSelectFigure from '../PostAreaSelectFigure'

const Post = () => {
  return (
    <PostContainer>
      <S.PostHeader>
        <S.PostHeaderClose>
          <SlClose size={20} fill="#d65923" cursor="pointer" />
        </S.PostHeaderClose>
      </S.PostHeader>
      <S.PostHeaderAreaContent>
        <S.PostAreaFigure>
          <PostAreaSelectFigure />
        </S.PostAreaFigure>
        <S.PostAreaMessage>
          <S.PostAreaParagraph>
            <S.PostParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              mattis ligula vel velit scelerisque iaculis.
            </S.PostParagraph>
            <S.PostAuthor>
              <span className="post__author-invited">Enviado por:</span>
              <span className="post__author-name">Manoela Oliveira</span>
            </S.PostAuthor>
          </S.PostAreaParagraph>
        </S.PostAreaMessage>
      </S.PostHeaderAreaContent>
    </PostContainer>
  )
}

export default Post
