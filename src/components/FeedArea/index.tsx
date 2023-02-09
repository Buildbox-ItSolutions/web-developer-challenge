import React from 'react'

/* components */
import Post from '../Post'

/* style */
import * as S from './style'

const FeedArea = () => {
  return (
    <S.FeedArea>
      <S.FeedTitleArea>
        <S.FeedTitle>Feed</S.FeedTitle>
      </S.FeedTitleArea>
      <S.FeedPost>
        <Post />
        <Post />
        <Post />
      </S.FeedPost>
    </S.FeedArea>
  )
}

export default FeedArea
