import React from 'react';
import deleteIcon from '../../../../assets/delete-icon.svg';
import { IPost } from '../../Post.types';

type Props = {
  posts: IPost[];
  deletePost: (postId: string) => void;
};

function PostList({ posts, deletePost }: Props) {
  const list = posts.map((post) => {
    const handleClick = () => deletePost(post.id);

    return (
      <div key={post.id}>
        <button type="button" aria-label="deletar post" onClick={handleClick}>
          <img src={deleteIcon} />
        </button>
        <div>
          <img src={post.image} />
          <div>
            <p>{post.message}</p>
            <p>Enviado por</p>
            <p>{post.createdBy}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <p>feed</p>
      {posts.length > 0 ? list : <p>Publique um post para o ver aqui</p>}
    </div>
  );
}

export default PostList;
