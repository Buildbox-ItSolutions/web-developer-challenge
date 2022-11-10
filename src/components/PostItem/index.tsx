import React, { useState } from 'react';
import { PostItemContainer } from './styles';
import DeleteBtn from '../../assets/delete.svg'
import postData from '../../utils/post-data.json';
import { IPost } from '../../types/IPost';
import { usePost } from '../../context/usePost';

const PostItem = () => {
  const [data, setData] = useState<IPost[]>(
    [
      {
        "id": 1,
        "image": "photo-base.png",
        "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur delectus provident, laboriosam eveniet facilis vel totam nam facere eos enim eligendi tenetur, debitis cum blanditiis nesciunt esse rem aut!",
        "author": "Manuela Oliveira"
      },
      {
        "id": 2,
        "image": "photo-base.png",
        "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur delectus provident, laboriosam eveniet facilis vel totam nam facere eos enim eligendi tenetur, debitis cum blanditiis nesciunt esse rem aut!",
        "author": "Manuela Oliveira"
      },
      {
        "id": 3,
        "image": "photo-base.png",
        "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur delectus provident, laboriosam eveniet facilis vel totam nam facere eos enim eligendi tenetur, debitis cum blanditiis nesciunt esse rem aut!",
        "author": "Manuela Oliveira"
      },
      {
        "id": 4,
        "image": "photo-base.png",
        "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur delectus provident, laboriosam eveniet facilis vel totam nam facere eos enim eligendi tenetur, debitis cum blanditiis nesciunt esse rem aut!",
        "author": "Manuela Oliveira"
      }
    ]
  )

  const { post, deletePost } = usePost();

  return (
    <>
      {post.map((post: IPost) => (
        <PostItemContainer>
          <img
            src={DeleteBtn}
            alt="Delete Button"
            className='delete-btn'
            onClick={() => deletePost(post.id)}
          />
          <div className='post-image'>
            <img src={post.image} alt="PostImg" />
          </div>
          <div className='post-text'>
            <p>{post.message}</p>
            <div className='author'>
              <span>Enviado por</span>
              <p>{post.author}</p>
            </div>
          </div>
        </PostItemContainer>
      ))}
    </>
  )
}

export default PostItem