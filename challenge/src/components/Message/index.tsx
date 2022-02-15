import { useState } from 'react'
import { 
  Container, 
  MessagePanel, 
  ImageUpload, 
  ImageLabelUpload, 
  ImageWrapper, 
  ImageDelete, 
  ImageView,
  FieldsWrapper,
  Input,
  TextArea,
  ButtonsWrapper,
  ButtonSubmit,
  ButtonCancel 
} from './styles'

export function Message() {
  const [image, setImage] = useState('')

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.files && event.target.files.length > 0){
      const src = URL.createObjectURL(event.target.files[0]);
      setImage(src)
    }
  }

  const handleRemoveImage = () => {
    setImage('')
  }

  return (
    <Container>
      <MessagePanel>
        <ImageUpload onChange={event => handleImage(event)} />
        { image ? 
        <ImageWrapper>
          <ImageView src={image} />
          <ImageDelete onClick={handleRemoveImage} />
        </ImageWrapper> 
        : <ImageLabelUpload /> }

        <FieldsWrapper>
          <Input name='name' placeholder='Digite seu nome' />
          <TextArea name='message' placeholder='Mensagem' />
        </FieldsWrapper>  

        <ButtonsWrapper>
          <ButtonCancel name='reset' type='reset'>Descartar</ButtonCancel>
          <ButtonSubmit name='submit' type='submit'>Publicar</ButtonSubmit>
        </ButtonsWrapper>
      </MessagePanel>
    </Container>
  )
}