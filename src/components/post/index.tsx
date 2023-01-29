import React from 'react'
import * as C from './style'
import Delete from '../../assets/delete.svg'
import Image from '../image'
import { IPost } from '../../types/post'
function Post({ post }: { post: IPost }) {
  return (
    <C.ContainerPost>
      <C.DeletePost> <C.IconDelete src={Delete} /> </C.DeletePost>
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