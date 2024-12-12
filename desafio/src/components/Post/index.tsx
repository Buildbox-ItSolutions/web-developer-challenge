import React from 'react';
import './style.css';

type PostProps = {
  post: {
    name: string;
    message: string;
    image: File | null;
  };
  onDelete: () => void;
};

const Post: React.FC<PostProps> = ({ post, onDelete }) => {
  return (
    <div className="post-container">
      <div className="delete-post-btn-container">
        <button className="delete-post-btn" onClick={onDelete}>x</button>
      </div>
      <div className="post-content">
        {post.image && <img src={URL.createObjectURL(post.image)} alt="" />} 
        <div className='text-post-content'>
          <div className='coment-text'><p>{post.message}</p></div>
          <p>
            <span>Enviado por:</span><br />
            {post.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;