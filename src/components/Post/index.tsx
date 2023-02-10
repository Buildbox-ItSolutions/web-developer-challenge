import React, { useContext } from 'react'

/* style */
import * as S from './style'

/* icons */
import { SlClose } from 'react-icons/sl'
import { RxImage } from 'react-icons/rx'

/* components */
import PostContainer from '../PostContainer'
import PostAreaSelectFigure from '../PostAreaSelectFigure'
import { PostContext } from '../../context/PostContext'

type PropsPost = {
  id: number
  figure: string | null
  message: string
  name: string
}

const Post: React.FC<PropsPost> = ({ figure, message, name, id }) => {
  const { posts, setPosts } = useContext(PostContext)

  const removePost = (id: number) => {
    const postFiltered = posts.filter((_, indice) => indice != id)
    setPosts(postFiltered)
  }

  return (
    <PostContainer>
      <S.PostHeader>
        <S.PostHeaderClose>
          <SlClose
            size={20}
            fill="#d65923"
            cursor="pointer"
            onClick={() => removePost(id)}
          />
        </S.PostHeaderClose>
      </S.PostHeader>
      <S.PostHeaderAreaContent>
        <S.PostAreaFigure>
          <PostAreaSelectFigure>
            {figure ? (
              <S.PostAreaImage src={figure} alt={name} />
            ) : (
              <RxImage size={24} />
            )}
          </PostAreaSelectFigure>
        </S.PostAreaFigure>
        <S.PostAreaMessage>
          <S.PostAreaParagraph>
            <S.PostParagraph>{message}</S.PostParagraph>
            <S.PostAuthor>
              <span className="post__author-invited">Enviado por:</span>
              <span className="post__author-name">{name}</span>
            </S.PostAuthor>
          </S.PostAreaParagraph>
        </S.PostAreaMessage>
      </S.PostHeaderAreaContent>
    </PostContainer>
  )
}

export default Post
