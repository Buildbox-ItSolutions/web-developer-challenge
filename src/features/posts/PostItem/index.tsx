import { deletePost } from '../postsSlice';
import { useAppDispatch } from '../../../app/hooks';

import defaultImage from '../../../assets/icons/user.svg';
import deleteIcon from '../../../assets/icons/delete.svg';

import { Container } from './styles';
import { IPost } from '../../../models/IPost';

interface PostItemProps {
  post: IPost
}

export function PostItem({ post }: PostItemProps) {
  const dispatch = useAppDispatch();

  function removeItem(id: string) {
    dispatch(deletePost(id));
  }

  return (
    <Container>
      <button
        type="button"
        id="delete-item"
        onClick={() => removeItem(post.id as string)}
      >
        <img src={deleteIcon} alt="Excluir" />
      </button>

      <div className="post-data">
        {
          post.previewImage?.url ? (
            <img src={post.previewImage.url} alt="" />
          ) : (
            <img src={defaultImage} alt="" />
          )
        }

        <div className="message-and-author">
          <p>{post.message}</p>
          <span className="sent-by">Enviado por</span>
          <br />
          <span className="author">{post.name}</span>
        </div>
      </div>
    </Container>
  );
};
