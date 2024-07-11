import React from 'react'
import './styles.css'
import { PostCard } from '../PostCard'

const Feedbox = (params) => {

    return(
        <div className='feed-container'>
            <div className='feed-tittle-box'>Feed</div>
            {params.posts.map((_, index, array) => {
                return(
                    <PostCard key={'post'+ index} post={array[array.length - index - 1]} setPosts={params.setPosts} index={array.length - index - 1}/>
                )
            })}
        </div>        
    )
}
export {Feedbox}