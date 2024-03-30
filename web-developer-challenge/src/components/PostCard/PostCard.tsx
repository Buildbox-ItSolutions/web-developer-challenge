import React from 'react'
import { Container, DeleteButtonContainer, MainContentContainer, PhotoContainer, TextContainer } from './PostCardStyles'
import Avatar from './_components/Avatar/Avatar'
import deleteItem from '../../../public/delete.svg'
import AsideText from './_components/AsideText/AsideText'
import { Post, usePostStore } from '@/db/dbZustand'

interface Props {
    post: Post;
}

function PostCard( { post } : Props) {

    const { removePost } = usePostStore()
  
  return (
    <Container>
        <DeleteButtonContainer onClick={() => removePost(post.id)}>
            <img src={deleteItem.src} alt='delete icon'></img>
        </DeleteButtonContainer>
        <MainContentContainer>
            <PhotoContainer>
                <Avatar image={post.photo}></Avatar>
            </PhotoContainer>
            <TextContainer>
                <AsideText message={post.message} createdBy={post.createdBy}></AsideText>
            </TextContainer>
        </MainContentContainer>
    </Container>
  )
}

export default PostCard