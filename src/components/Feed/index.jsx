import { useState, useContext } from 'react';
// context
import { MyContext } from '../../context/MyContext';
// style
import * as style from './style'
// component
import { Post } from '../../components'


function Feed() {

  const { listPosts, setListPosts } = useContext(MyContext);

  const handleDeletePost = (index) => {
    let newListPosts = [...listPosts];

    newListPosts.splice(index, 1);
    setListPosts(newListPosts);
  };

  return (
    <style.FeedContainer>
      <style.FeedContent>
        <span className='title-feed'>Feed</span>
        { listPosts.map((item, index) =>
          <Post
            key={item.name}
            index={index}
            handleDeletePost={handleDeletePost}
            image={item.image}
            message={item.message}
            name={item.name}
          />
        )}
      </style.FeedContent>
    </style.FeedContainer>
  )
};

export default Feed;