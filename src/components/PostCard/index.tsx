import { useAppDispatch } from '../../hooks'
import { Post, deletePost } from '../../redux/postsSlice'

import * as S from './style'

interface PostProps {
  post: Post
  index: number
}

const PostCard = ({ post, index }: PostProps) => {
  const { profileImage, name, message } = post

  const dispatch = useAppDispatch()

  return (
    <S.Card data-testid='post-card'>
      <S.PostDelete data-testid='delete-post' onClick={() => dispatch(deletePost(index))} />
      <S.ProfileImage src={profileImage} alt={name} />
      <S.PostContainer>
        <S.Message>{message}</S.Message>
        <S.User>
          <S.SubmittedBy>Enviado por</S.SubmittedBy>
          <S.Name>{name}</S.Name>
        </S.User>
      </S.PostContainer>
    </S.Card>
  )
}

export default PostCard
