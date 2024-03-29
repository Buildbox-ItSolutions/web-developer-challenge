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
          <img src={DeleteIcon} alt="Delete icon" />
        </ButtonIcon>
      </DeleteIconContainer>

      <BodyContainer>
        {imgSrc ? (
          <PostImage src={imgSrc} alt="Post image" />
        ) : (
          <PlaceholderImageContainer>
            <img src={PlaceholderImage} alt="Post without image" />
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
