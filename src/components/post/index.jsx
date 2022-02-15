import P from 'prop-types';

import { useContext } from 'react';

import { Context } from '../../contexts/homeContext';
import btnDelete from '../../images/delete.png';
// import g from '../../images/photo-base.png';

import './styles.css';

export const Post = ({ post }) => {
  const context = useContext(Context);

  const handleClick = (id) => {
    context.dispatch({ type: ['new', context.state.filter((post) => post.id !== id)] });
  };

  return (
    <div className="post">
      <div className="post-photo">
        <img src={post.photo} alt="photo" />
      </div>
      <div className="content">
        <h2>{post.message}</h2>
        <div className="author">
          <p>Enviado por</p>
          <p>{post.name}</p>
        </div>
      </div>
      <img src={btnDelete} alt="button delete" className="delete" onClick={() => handleClick(post.id)} />
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    photo: P.string,
    name: P.string,
    message: P.string,
  }),
};
