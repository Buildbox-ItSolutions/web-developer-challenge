import deleteImage from "../../src/assets/delete.svg"
import { Container, ContentContainer, DeleteImage, ImageContainer, PostImage, SentBySpan, TextContainer } from "./post-styles"

interface PostProps {
  removeFunction: Function,
  id: number,
  photo: File | null,
  creatorName: string,
  message: string
}

export function Post({removeFunction, id, photo, message, creatorName}: PostProps) {
    return (
        <Container>
              <ImageContainer>
                <DeleteImage onClick={() => removeFunction(id)} src={deleteImage} />
              </ImageContainer>

              <ContentContainer>
                {
                  photo !== null 
                  &&
                  <PostImage src={URL.createObjectURL(photo)}/>
                }
                <TextContainer>
                  <p>{message}</p>
                  <SentBySpan>Enviado por</SentBySpan>
                  <p>{creatorName}</p>
                </TextContainer>
              </ContentContainer>
          </Container>
    )
}