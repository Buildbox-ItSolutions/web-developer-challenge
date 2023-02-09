import { IconButton, PostContainer, PostContent, ImageContainer, Container } from "./styles";
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
      <Container>
        
        <PostContainer>
          <ImageContainer>
            <img src={post.avatar} alt="" />
          </ImageContainer>

          <PostContent>
            <p>
              {post.message}
            </p>
            <strong>Enviado por</strong>
            <span>{post.name}</span>
          </PostContent>
        </PostContainer>

        <IconButton>
          <button type="submit" onClick={() => handleRemovePost(post.id)}>
            <X />
          </button>
        </IconButton>
      </Container>
    </BoxContainer>
  )
}
