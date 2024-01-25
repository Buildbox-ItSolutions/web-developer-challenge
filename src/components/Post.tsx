import { XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useDispatch } from 'react-redux';
import { PostInterface } from '../interfaces/PostInterface';
import { deletePost } from '../redux/Postactions';
import PostSt from '../styles/PostStyles';

const Post: React.FC<PostInterface> = ({ id, name, message, photo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(id));
  };

  return (
    <PostSt>
      <button
        data-testid='post-delete-button'
        onClick={handleDelete}
        title="Excluir"
        style={{ zIndex: 999 }}
      >
        <XMarkIcon  className="h-3 w-3"/>
      </button>

      <div className="group">
        <p data-testid="post-message" className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">{message}</p>
      </div>
      <div className="mt-2 flex items-center gap-x-4">
        <img src={photo} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
        <div className="text-sm leading-6">
          <p data-testid="post-name" className="font-semibold text-gray-900">
            <span className="absolute inset-0" />
            Enviado por {name}
          </p>
        </div>
      </div>
    </PostSt>
  );
};

export default Post;