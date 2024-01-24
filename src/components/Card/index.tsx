import { IPost } from "../../types/post.types";
import * as Post from "./card.styles";
import PlaceholderImage from "../../assets/image.svg";
import DeleteIcon from "../../assets/delete.svg";
const Card: React.FunctionComponent<IPost> = ({
  id,
  image,
  createdBy,
  message,
}) => {
  return (
    <>
      <Post.Wrapper id={id}>
        <Post.Delete src={DeleteIcon}/>
        <Post.AvatarWrapper
          $hasImage={!!image}
          src={image || PlaceholderImage}
        />
        <Post.Content>
          <Post.Message>{message}</Post.Message>
          <Post.CreatedBy>
            <p>Enviado por</p>
            <Post.Author>{createdBy}</Post.Author>
          </Post.CreatedBy>
        </Post.Content>
      </Post.Wrapper>
    </>
  );
};

export default Card;
