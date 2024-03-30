import { useContext } from 'react'
import { PostsContext } from '../../contexts/PostsContext'
import { Post } from '../Post'

export const PostList: React.FC = () => {
  const { posts, deletePost } = useContext(PostsContext)

  return (
    <>
      {posts.map((post, index) => {
        return <Post key={index} data={post} action={() => deletePost(index)} />
      })}
    </>
  )
}
