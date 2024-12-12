import React from 'react'
import { useQuery } from 'react-query'
import postServices from '../../services/posts'
import { IPost } from '../../types/post'
import Post from '../post'
import * as C from './style'

function Feed() {
  const { isLoading, error, data } = useQuery({ queryKey: ['posts'], queryFn: () => postServices.get() })
  return (
    <C.ContainerFeed>
      <C.TittleFeed> Feed </C.TittleFeed>

      <C.ContainerPosts>
        {data && data.map((item: IPost) => <Post key={item._id} post={item} />)}
      </C.ContainerPosts>
    </C.ContainerFeed>
  )
}

export default Feed