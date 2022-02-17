import React from 'react'
import Container from '../Container'
import Feed from '../Feed'
import Form from '../Form'
import Header from '../Header'
import * as S from './style'

const Main: React.FC = () => {
  return (
    <S.Wrapper>
      <Header />
      <Container>
        <Form />
        <Feed />
      </Container>
    </S.Wrapper>
  )
}

export default Main
