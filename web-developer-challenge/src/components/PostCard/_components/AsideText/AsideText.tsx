import React from 'react'
import { Container, PostCreator, PostedBy, PostedByContainer } from './AsideTextStyles'

function AsideText() {
  return (
    <Container>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem esse ullam, illo vero fugit enim cumque perferendis illum temporibus maiores sit! Optio ab illo nisi praesentium tempora quis iste quasi.
        <PostedByContainer>
            <PostedBy>Enviado por</PostedBy>
            <PostCreator>Manuela Oliveira</PostCreator>
        </PostedByContainer>
    </Container>
  )
}

export default AsideText