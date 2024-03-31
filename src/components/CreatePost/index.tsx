import { Button } from '../Button'
import { ImgLabel } from '../ImgLabel'
import { Input } from '../Input'
import { TextArea } from '../TextArea'
import { TextButton } from '../TextButton'
import { ButtonsContainer, CreatePostContainer, InfoContainer } from './style'

export function CreatePost() {
  return (
    <CreatePostContainer>
      <ImgLabel />
      <InfoContainer>
        <Input />
        <TextArea />
      </InfoContainer>
      <ButtonsContainer>
        <TextButton text="Descartar" />
        <Button text="Publicar" disabled />
      </ButtonsContainer>
    </CreatePostContainer>
  )
}
