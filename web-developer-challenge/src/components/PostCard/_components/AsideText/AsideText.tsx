import React from 'react'
import { Container, PostCreator, PostedBy, PostedByContainer } from './AsideTextStyles'

interface Props {
  message: string;
  createdBy: string;
}

function AsideText( { message, createdBy} : Props) {
  return (
    <Container className='roboto'>
        {message}
        <PostedByContainer>
            <PostedBy>Enviado por</PostedBy>
            <PostCreator>{createdBy}</PostCreator>
        </PostedByContainer>
    </Container>
  )
}

export default AsideText