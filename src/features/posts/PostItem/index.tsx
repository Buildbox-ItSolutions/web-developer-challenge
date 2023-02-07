import { deletePost } from '../postsSlice';
import { useAppDispatch } from '../../../app/hooks';

import defaultImage from '../../../assets/icons/user.svg';
import deleteIcon from '../../../assets/icons/delete.svg';

import { Container } from './styles';

interface PostItemProps {
  postData: {
    id?: string;
    name: string;
    message: string;
    previewImage?: {
      name: string;
      url: string;
    };
    image?: File;
  };
}

export function PostItem({ postData }: PostItemProps) {
  const dispatch = useAppDispatch();

  function removeItem(id?: string) {
    id && dispatch(deletePost(id));
  }

  return (
    <Container>
      <button
        type="button"
        id="delete-item"
        onClick={() => removeItem(postData.id)}
      >
        <img src={deleteIcon} alt="Excluir" />
      </button>

      <div className="post-data">
        {
          postData.previewImage?.url ? (
            <img src={postData.previewImage.url} alt="" />
          ) : (
            <img src={defaultImage} alt="" />
          )
        }

        <div className="message-and-author">
          <p>{postData.message}</p>
          <span className="sent-by">Enviado por</span>
          <br />
          <span className="author">{postData.name}</span>
        </div>
      </div>
    </Container>
  );
};
