import React from 'react'
import { ReactComponent as IconDelete } from '../../assets/delete.svg'
import defaultTheme from '../../theme/defaultTheme'
import * as S from './style'

interface PostProps {
  name: string
  photo: string
  message: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  id: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deletePostButton: (event: any) => void
}

const Post: React.FC<PostProps> = ({
  name,
  photo,
  id,
  message,
  deletePostButton
}) => {
  return (
    <S.Wrapper id={id} theme={defaultTheme}>
      <S.ButtonDeletePost onClick={deletePostButton}>
        <IconDelete />
      </S.ButtonDeletePost>
      <S.ContentWrapper>
        <S.PhotoPost photo={photo} />
        <S.Description theme={defaultTheme}>{message}</S.Description>
      </S.ContentWrapper>
      <S.InfoAuthor theme={defaultTheme}>
        <span>Enviado por</span>
        <p>{name}</p>
      </S.InfoAuthor>
    </S.Wrapper>
  )
}

export default Post
