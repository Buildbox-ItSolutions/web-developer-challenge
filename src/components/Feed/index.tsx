import React, { useMemo } from 'react'
import { UseMyPostContext } from '../../context/PostDataContext/useMyPostContext'
import { v4 as uuidv4 } from 'uuid'
import Post from '../Post'
import * as S from './style'

type PostType = { id: number; name: string; photo: string; message: string }
type EventClickButtonDeletePost = React.BaseSyntheticEvent<HTMLButtonElement>

const Feed: React.FC = () => {
  const [postState, setPostState] = UseMyPostContext()

  const newPostState = useMemo(() => {
    return postState.map((post: PostType, index: number) => {
      return {
        ...post,
        id: index
      }
    })
  }, [postState])

  const handleDeletePostClick = (event: EventClickButtonDeletePost) => {
    const postIndex = event.currentTarget.parentElement.getAttribute('id')
    newPostState.splice(postIndex, 1)
    setPostState([...newPostState])
  }

  return (
    <S.Wrapper>
      {newPostState &&
        newPostState.map((post: PostType) => (
          <Post
            id={post.id}
            key={uuidv4()}
            photo={post.photo}
            message={post.message}
            name={post.name}
            deletePostButton={handleDeletePostClick}
          />
        ))}
    </S.Wrapper>
  )
}

export default Feed
