import React from 'react'
import { Feed } from '../../components/Feed'
import { FormCreatePost } from '../../components/FormCreatePost'
import { Container } from './style'

export const Home = () => {
  return (
    <Container>
      <FormCreatePost/>
      <Feed/>
    </Container>
  )
}
