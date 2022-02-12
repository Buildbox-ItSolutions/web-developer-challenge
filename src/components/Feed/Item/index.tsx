import iconDelete from "../../../assets/icons/delete.svg";
import { IPost } from "../../../interfaces/IPost";
import { Container, Content } from "./styles";

interface Props {
  post: IPost;
  onConfirmRemovePost: (id: number) => void;
}

export const Item = ({ post, onConfirmRemovePost }: Props) => {
  return (
    <Container>
      <button type="button" onClick={() => onConfirmRemovePost(post.id)}>
        <img src={iconDelete} alt="iconDelete" />
      </button>

      <Content>
        <img src={post.image} alt={post.name} />

        <div id="description">
          <p>{post.message}</p>

          <div>
            <span>Enviado por</span>
            <h6>{post.name}</h6>
          </div>
        </div>
      </Content>
    </Container>
  );
};
