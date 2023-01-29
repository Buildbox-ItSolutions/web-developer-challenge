import React from 'react'
import * as C from './style'
import Delete from '../../assets/delete.svg'
import Image from '../image'
import { IPost } from '../../types/post'
import postServices from '../../services/posts'
import { useMutation, useQueryClient } from 'react-query'
function Post({ post }: { post: IPost }) {
  const client = useQueryClient()
  const mutation = useMutation((id: string) => postServices.delete(id), {
    onSuccess: () => {
      client.invalidateQueries(['posts'])
    }
  })

  return (
    <C.ContainerPost>
      <C.DeletePost> <C.IconDelete src={Delete} onClick={() => mutation.mutate(post._id)} /> </C.DeletePost>
      <C.PostItem>
        <C.ImagePost src={`http://localhost:8081/${post.image}`} />
        <C.InformationPost>
          <C.Message>
            {post.message}
          </C.Message>
          <C.Author>
            <div> Enviado por </div>
            <C.NameAuthor> {post.name} </C.NameAuthor>
          </C.Author>
        </C.InformationPost>
      </C.PostItem>
    </C.ContainerPost>
  )
}

export default Post