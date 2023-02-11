import React, { useContext } from 'react';

import PostContext from '../context/PostContext';

const Feed = () => {
  const { posts, setPosts } = useContext(PostContext);

  const handleRemove = (name) => {
    const updatedItems = [...posts].filter((post) => post.name !== name);

    setPosts(updatedItems);
  };
  return (
    <section>
      {posts &&
        posts.map((post, i) => (
          <div key={i}>
            <button type='button' onClick={() => handleRemove(post.name)}>
              X
            </button>
            <img src={post.image} alt={post.name} width='24'/>
            <p>{post.postText}</p>
            <p>Enviado por</p>
            <p>{post.name}</p>
          </div>
        ))}
    </section>
  );
};

export default Feed;
