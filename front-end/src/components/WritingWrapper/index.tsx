import React from 'react'
import { Container, NameInput, MessageInput } from './styles'

function WritingWrapper() {
  return (
    <Container>
      <NameInput 
        type="text"
        placeholder="Digite seu nome"
      />
      <MessageInput 
        type="text"
        placeholder="Digite seu nome"
      />
    </Container>
  )
}

export default WritingWrapper