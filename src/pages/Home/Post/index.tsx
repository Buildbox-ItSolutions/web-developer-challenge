import { X } from '@phosphor-icons/react'
import { PersonName, PostCard } from './styled'
import { ImageAvatar } from '../../../components/ImageAvatar'

interface PostProps {
  id: string
  name: string
  message: string
  imageURl: string
  handleDelete(id: string): void
}

export function Post({ imageURl, message, name, id, handleDelete }: PostProps) {
  return (
    <PostCard>
      <button onClick={() => handleDelete(id)}>
        <X />
      </button>

      <ImageAvatar src={imageURl} />

      <div>
        <p>{message}</p>

        <PersonName>
          <span>Enviado por</span>
          <strong>{name}</strong>
        </PersonName>
      </div>
    </PostCard>
  )
}
