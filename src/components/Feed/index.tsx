import { useState } from 'react'

import PostCard from '../PostCard'
import { useAppSelector } from '../../hooks'
import { postsPerLoad } from '../../utils/constants'
import { chunkPosts } from '../../utils/functions'

import * as S from './style'

const Feed = () => {
  const posts = useAppSelector(({ posts }) => posts)
  const [counter, setCounter] = useState<number>(postsPerLoad)

  const chunkedPosts = chunkPosts(posts, counter)

  const showSeeMore = posts.length > chunkedPosts.length

  return (
    <S.Feed>
      <S.SectionTitle>
        Feed
      </S.SectionTitle>
      {chunkedPosts.map((post, index) =>
        <PostCard post={post} index={index} key={index} />)}
      {!posts.length && <S.NoPosts>Nenhuma postagem</S.NoPosts>}
      {showSeeMore &&
        <S.SeeMore
          data-testid='see-more-posts'
          onClick={() => setCounter(counter + postsPerLoad)}
        >
          Ver mais
        </S.SeeMore>
      }
    </S.Feed>
  )
}

export default Feed
