import React from 'react'
import { Post } from '../../interfaces/Post';
import { PostCardStyled } from './PostCard.style';
import UploadedImage from '../UploadedImage/UploadedImage';
import deleteIcon from '../../../../assets/delete.svg'

interface IPostCard{
    post: Post;
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}
function PostCard({post, setPosts}: IPostCard) {

  const deletePost = (idToRemove: string) => {
    setPosts((currentPosts) => currentPosts.filter(post => post.id.toString() !== idToRemove));
  };

  return (
    <PostCardStyled>
      <div className='deleteArea'>
        <img src={deleteIcon} alt="deletePost" className='deleteIcon' onClick={()=>deletePost(post.id.toString())}/>
      </div>
      <div className='textContentContainer'>
        <UploadedImage src={post.imageUrl}/>
        <div className='textContainer'>
          <div className='messageAndDeleteArea'>
            <p>{post.message}</p>
          </div>
          <div>
            <p className='uploadedBy'>Enviado por</p>
            <p className='senderName'>{post.name}</p>
          </div>
          </div>
      </div>
    </PostCardStyled>
  )
}

export default PostCard