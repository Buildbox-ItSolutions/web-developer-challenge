import React from 'react'
import PhotoPost from '../PhotoPost'
import { ReactComponent as IconDelete } from '../../assets/delete.svg'
import defaultTheme from '../../theme/defaultTheme'
import * as S from './style'

interface PostProps {
  photo: string
  title: string
  body: string
  author: string
}

const Post: React.FC<PostProps> = ({ photo, title, body, author }) => {
  return (
    <S.Wrapper theme={defaultTheme}>
      <S.ButtonDeletePost>
        <IconDelete />
      </S.ButtonDeletePost>
      <S.ContentWrapper>
        <PhotoPost photo={photo} alt={title} />
        <S.Description theme={defaultTheme}>{body}</S.Description>
      </S.ContentWrapper>
      <S.InfoAuthor theme={defaultTheme}>
        <span>Enviado por</span>
        <p>{author}</p>
      </S.InfoAuthor>
    </S.Wrapper>
  )
}

export default Post
