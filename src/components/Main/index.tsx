import React from 'react'
import Feed from '../Feed'
import Form from '../Form'
import Header from '../Header'
import * as S from './style'

const Main: React.FC = () => {
  return (
    <S.Wrapper>
      <Header />
      <Form />
      <Feed />
    </S.Wrapper>
  )
}

export default Main
