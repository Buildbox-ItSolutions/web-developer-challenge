import React from 'react'
import { FeedPageStyled } from './FeedPage.style'
import PostForm from '../components/PostForm/PostForm'

function FeedPage() {
  return (
    <FeedPageStyled>
        <PostForm/>
    </FeedPageStyled>
  )
}

export default FeedPage