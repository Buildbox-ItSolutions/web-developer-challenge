import { IconButton, PostFoooter, PostContent } from "./styles";
import { X } from 'phosphor-react'
import { BoxContainer } from "../BoxContainer";
import { IPosts } from "../../interface/IPosts";

export interface PostProps {
  post: IPosts;
  handleRemovePost: (id: string) => void;
}

export function Post({post, handleRemovePost}: PostProps) {
  return (
    <BoxContainer>
      <IconButton>
        <button type="submit" onClick={() => handleRemovePost(post.id)}>
          <X />
        </button>
      </IconButton>
   
      <PostContent>
        <img src={post.avatar} alt="" />
        <p>
          {post.message}
        </p>
      </PostContent>
      <PostFoooter>
        <strong>Enviado por</strong>
        <span>{post.name}</span>
      </PostFoooter>
    </BoxContainer>
  )
}