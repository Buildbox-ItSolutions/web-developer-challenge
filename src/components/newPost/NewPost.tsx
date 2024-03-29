import { Container, FormContainer, Image, Input, TextArea, ButtonContainer, ClearButton, Button, TextPublicar } from "./NewPost"
import imageNone from "../../assets/image.svg"
import { useContext, useState } from "react"
import Context from "../../context/Context"

function NewPost() {

  const { addPost } = useContext(Context)

  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  // const [image, setImage] = useState('')


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const id = new Date().toISOString()
    addPost({ id, name, message })
    setName('')
    setMessage('')
  }
  
  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Image src={imageNone} alt="adicionar imagem"/>
        <Input type="text" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} required />
        <TextArea placeholder="Mensagem" value={message} onChange={(e) => setMessage(e.target.value)} />
        <ButtonContainer>
          <ClearButton><u>Descartar</u></ClearButton>
          <Button type="submit">
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