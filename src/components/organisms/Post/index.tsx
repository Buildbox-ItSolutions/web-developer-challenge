import { Avatar, Icon } from 'components/atoms'
import { usePost } from 'hooks'

import * as S from './styles'

type Props = {
  pic: string
  author: string
  content: string
  id: number
}

export const Post = ({ pic, author, content, id }: Props) => {
  const { deletePost } = usePost()
  return (
    <S.Container>
      <Icon size='20px' icon='IcDelete' onClick={() => deletePost(id)} />
      <S.Content>
        <Avatar input={false} pic={pic} />
        <S.Description>
          {content}
          <span>
            Enviado por <br />
            <span>{author}</span>
          </span>
        </S.Description>
      </S.Content>
    </S.Container>
  )
}
