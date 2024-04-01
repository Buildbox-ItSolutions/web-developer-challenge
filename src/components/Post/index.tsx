import { PostContainer, PostInfoContainer } from './style'
import { TiDeleteOutline } from 'react-icons/ti'

interface PostProps {
  text: string
  author: string
  img: string
  onDeletePost: () => void
}

export function Post({ text, author, img, onDeletePost }: PostProps) {
  return (
    <PostContainer>
      <TiDeleteOutline onClick={onDeletePost} />
      <img src={img} alt={`Imagem de perfil do usuário ${author}`} />
      <PostInfoContainer>
        <p>{text}</p>
        <h3>Enviador por</h3>
        <span>{author}</span>
      </PostInfoContainer>
    </PostContainer>
  )
}
