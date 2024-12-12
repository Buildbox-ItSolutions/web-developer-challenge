import { usePost } from '../../contexts/PostContext'

import { PostWrapper, PostContent } from './styles'
import deletar from '../../../assets/delete.svg'

interface PostProps {
  id: string
  username: string
  name: string
  message: string
}

export function Post({ id, username, name, message }: PostProps) {
  const { deletePost } = usePost()

  return (
    <PostWrapper>
      <button onClick={() => deletePost(id)}>
        <img src={deletar} />
      </button>

      <img src={`https://github.com/${username}.png`} alt={name} />

      <PostContent>
        <p>{message}</p>
        <span>Enviado por</span>
        <span>{name}</span>
      </PostContent>
    </PostWrapper>
  )
}
