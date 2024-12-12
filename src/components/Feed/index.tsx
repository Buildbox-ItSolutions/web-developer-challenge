import { Container } from './styles'
import { useContext } from 'react'

import { PostsContext } from '../../contexts/PostsContext'
import { Post } from '../Post'

export const Feed = () => {
  const {posts} = useContext(PostsContext)

  return (
    <Container>
      <span>Feed</span>
      {
        posts.map((value, index) => {
          return <Post src={value.photo} postID={index} key={index} name={value.name} message={value.message} />
        })
      }
    </Container>
  )
}
