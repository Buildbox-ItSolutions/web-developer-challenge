import {
  AuthorName,
  BodyContainer,
  ButtonIcon,
  Container,
  Content,
  CreatedBy,
  CreditsContainer,
  DeleteIconContainer,
  PlaceholderImageContainer,
  PostImage,
  TextsContainer,
} from "./styles";
import DeleteIcon from "../../assets/delete.svg";
import PlaceholderImage from "../../assets/image.svg";

interface Props {
  authorName: string;
  imgSrc: string | null;
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
        {imgSrc ? (
          <PostImage src={imgSrc} />
        ) : (
          <PlaceholderImageContainer>
            <img src={PlaceholderImage} />
          </PlaceholderImageContainer>
        )}
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
