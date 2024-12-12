import React from 'react'
import { FeedContainer, FeedSpan, NotFoundPost } from './FeedStyles'
import PostCard from '../PostCard/PostCard'
import { Post } from '@/db/dbZustand'

interface Props {
    posts: Post[]

}

function Feed( { posts } : Props) {

    const postsOrdered = [...posts].reverse()
    
  return (
    <FeedContainer>
        {posts.length > 0 && <FeedSpan>Feed</FeedSpan>}
        {
            
            posts.length > 0 ?
           
            postsOrdered.map((item, index) => {
               
                return (
                    <PostCard post={item} key={index}></PostCard>
                )
            })
           
            : 
            <NotFoundPost>
                Não existem mais posts.
            </NotFoundPost>
        }
    </FeedContainer>
  )
}

export default Feed