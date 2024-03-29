import React from 'react'
import { Container, DeleteButtonContainer, MainContentContainer, PhotoContainer, TextContainer } from './PostCardStyles'
import Avatar from './_components/Avatar/Avatar'
import deleteItem from '../../../public/delete.svg'
import AsideText from './_components/AsideText/AsideText'

function PostCard() {
  return (
    <Container>
        <DeleteButtonContainer>
            <img src={deleteItem.src} alt='delete icon'></img>
        </DeleteButtonContainer>
        <MainContentContainer>
            <PhotoContainer>
                <Avatar></Avatar>
            </PhotoContainer>
            <TextContainer>
                <AsideText></AsideText>
            </TextContainer>
        </MainContentContainer>
    </Container>
  )
}

export default PostCard