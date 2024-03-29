import {
  AuthorName,
  BodyContainer,
  ButtonIcon,
  Container,
  Content,
  CreatedBy,
  CreditsContainer,
  DeleteIconContainer,
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
      <DeleteIconContainer>
        <ButtonIcon onClick={onDelete}>
          <img src={DeleteIcon} />
        </ButtonIcon>
      </DeleteIconContainer>

      <BodyContainer>
        <PostImage src={imgSrc} />
        <TextsContainer>
          <Content>{content}</Content>

          <CreditsContainer>
            <CreatedBy>Enviado por</CreatedBy>

            <AuthorName>{authorName}</AuthorName>
          </CreditsContainer>
        </TextsContainer>
      </BodyContainer>
    </Container>
  );
}
