import React, { ReactNode } from 'react'

/* style */
import * as S from './style'

type PropsFeed = {
  children: ReactNode
}

const FeedArea: React.FC<PropsFeed> = ({ children }) => {
  return (
    <S.FeedArea>
      <S.FeedTitleArea>
        <S.FeedTitle>Feed</S.FeedTitle>
      </S.FeedTitleArea>
      <S.FeedPost>{children}</S.FeedPost>
    </S.FeedArea>
  )
}

export default FeedArea
