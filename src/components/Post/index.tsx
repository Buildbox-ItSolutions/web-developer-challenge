import {
  AuthorName,
  ButtonIcon,
  Container,
  ContainerBody,
  ContainerDeleteIcon,
  Content,
  CreatedBy,
  CreditsContainer,
  PostImage,
  TextsContainer,
} from "./styles";
import DeleteIcon from "../../assets/delete.svg";

interface Props {
  authorName: string;
  imgSrc: string;
  content: string;
  onDelete: () => void;
}

export default function Post({ authorName, imgSrc, content, onDelete }: Props) {
  return (
    <Container>
      <ContainerDeleteIcon>
        <ButtonIcon onClick={onDelete}>
          <img src={DeleteIcon} />
        </ButtonIcon>
      </ContainerDeleteIcon>

      <ContainerBody>
        <PostImage src={imgSrc} />
        <TextsContainer>
          <Content>{content}</Content>

          <CreditsContainer>
            <CreatedBy>Enviado por</CreatedBy>

            <AuthorName>{authorName}</AuthorName>
          </CreditsContainer>
        </TextsContainer>
      </ContainerBody>
    </Container>
  );
}
