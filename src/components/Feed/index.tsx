import React from 'react'

import { IoIosCloseCircleOutline } from 'react-icons/io'
import { Post } from '../../types/Post'

import { FeedContainer, FeedItem, FeedItemContent, UserImage } from './style'

const Feed: React.FC<{ posts: Post[], deletePost: (id: string) => void }> = ({ posts, deletePost }) => {
  return (
    <FeedContainer>
      <span className='title'>Feed</span>

      {posts.map(post => (
        <FeedItem key={post.id}>
          <IoIosCloseCircleOutline className='deleteItem' onClick={() => deletePost(post.id)} />

          <UserImage>
            <img src={post.userImage} alt={post.userName} className='userImage' />
          </UserImage>

          <FeedItemContent>
            <div className='userMessage'>
              {post.userMessage}
            </div>

            <span className='sendBy'>Enviado por</span>
            <span className='userName'>{post.userName}</span>
          </FeedItemContent>
        </FeedItem>
      ))}
    </FeedContainer>
  )
}

export default Feed
