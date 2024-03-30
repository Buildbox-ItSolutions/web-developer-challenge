import {
  Author,
  Body,
  Container,
  Content,
  ContentWrapper,
  Footer,
  RemoveButton,
  Thumbnail,
} from './styles'

type Props = {
  content: string
  thumbnail: string
  author: string
  onClickRemovePost: () => void
}

export function PostCard({
  author,
  content,
  thumbnail,
  onClickRemovePost,
}: Props) {
  return (
    <Container>
      <RemoveButton onClick={onClickRemovePost} />
      <ContentWrapper>
        <Thumbnail src={thumbnail} alt="thumbnail" />
        <Content>
          <Body>{content}</Body>
          <Footer>
            <span>Enviado por</span>
            <Author>{author}</Author>
          </Footer>
        </Content>
      </ContentWrapper>
    </Container>
  )
}
