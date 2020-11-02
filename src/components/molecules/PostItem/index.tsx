import React from 'react';
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from 'store/ducks/posts/actions';

import { PostItemProps } from 'models/PostItemProps';

import { Container } from './styles';

import defaultImage from '../../../assets/images/user.svg';
import deleteIcon from '../../../assets/icons/delete.svg';
import likeIcon from '../../../assets/icons/like.svg';

const PostItem: React.FC<PostItemProps> = ({ postData }) => {
  const dispatch = useDispatch();

  function removeItem(id?: string) {
    id && dispatch(deletePost(id));
  }

  function likeItem(id?: string) {
    id && dispatch(likePost(id));
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
              <img src={defaultImage} alt="" /> // eslint-disable-line
            ) // eslint-disable-line
        }
        <div className="message-and-author">
          <p>{postData.message}</p>
          <span className="sent-by">Enviado por</span>
          <br />
          <span className="author">{postData.name}</span>
        </div>
      </div>
      <div className="like">
        <span>{postData.likes}</span>
        <button
          type="button"
          id="like-item"
          onClick={() => likeItem(postData.id)}
        >
          <img src={likeIcon} alt="Curtir" />
        </button>
      </div>
    </Container>
  );
};

export default PostItem;
