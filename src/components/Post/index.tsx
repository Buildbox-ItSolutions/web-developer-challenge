import React from 'react'
import PhotoPost from '../PhotoPost'
import { FiXCircle } from 'react-icons/fi'
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
    <S.Wrapper>
      <S.ButtonDeletePost>
        <FiXCircle size={20} color={defaultTheme.colors.red} />
      </S.ButtonDeletePost>
      <S.ContentWrapper>
        <PhotoPost photo={photo} alt={title} />
        <S.Description>{body}</S.Description>
      </S.ContentWrapper>
      <S.InfoAuthor>
        <span>Enviado por</span>
        <p>{author}</p>
      </S.InfoAuthor>
    </S.Wrapper>
  )
}

export default Post
