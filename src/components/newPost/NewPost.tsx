import { Container, FormContainer, Image, Input, TextArea, ButtonContainer, ClearButton, Button, TextPublicar } from "./NewPost"
import imageNone from "../../assets/image.svg"

function NewPost() {
  return (
    <Container>
      <FormContainer>
        <Image src={imageNone} alt="adicionar imagem"/>
        <Input type="text" placeholder="Digite seu nome" required />
        <TextArea placeholder="Mensagem" />
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