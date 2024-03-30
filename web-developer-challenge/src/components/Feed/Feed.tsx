import React from 'react'
import { FeedContainer } from './FeedStyles'
import PostCard from '../PostCard/PostCard'
import { Post } from '@/db/dbZustand'

interface Props {
    posts: Post[]

}

function Feed( { posts } : Props) {

    const postsOrdered = [...posts].reverse()
    
  return (
    <FeedContainer>
        {
            posts.length > 0 ?

            postsOrdered.map((item, index) => {
                return (
                    <PostCard post={item} key={index}></PostCard>
                )
            })
            : 
            <h1>Posts não encontrado</h1>
        }
    </FeedContainer>
  )
}

export default Feed