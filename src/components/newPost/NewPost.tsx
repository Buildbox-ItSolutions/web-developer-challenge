import { Container, FormContainer, Image, Input, TextArea, ButtonContainer,
  ClearButton, Button, TextPublicar, ImageInput, Add, Label } from "./NewPost"
import imageNone from "../../assets/image.svg"
import { useContext, useState } from "react"
import Context from "../../context/Context"

function NewPost() {

  const { addPost } = useContext(Context)

  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [image, setImage] = useState<File | undefined>(undefined)


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const id = new Date().toISOString()
    addPost({ id, name, message, image })
    setName('')
    setMessage('')
    setImage(undefined)
  }

  const handleClear = () => {
    setName('')
    setMessage('')
    setImage(undefined)
  }

  const enable = !name || !message || !image
  
  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>

        <Label htmlFor="imagem" >
          { image ? 
            <Image src={ URL.createObjectURL(image) } alt="adicionar imagem" $objectfit="cover" /> : 
            <Image src={ imageNone } alt="adicionar imagem" $objectfit="none" />
          }
        </Label>
          <Add>Adicionar imagem</Add>
        <ImageInput type="file" name="imagem" id="imagem" accept=".jpg, .jpeg, .png" onChange={ (e) => setImage(e.target.files?.[0])} required />

        <Input type="text" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} required />
        <TextArea placeholder="Mensagem" value={message} onChange={(e) => setMessage(e.target.value)} required />
        <ButtonContainer>
          <ClearButton onClick={ handleClear }><u>Descartar</u></ClearButton>
          <Button type="submit" disabled={enable}>
            <TextPublicar>
              Publicar
            </TextPublicar>
          </Button>
        </ButtonContainer>
      </FormContainer>
    </Container>
  )
}

export default NewPost