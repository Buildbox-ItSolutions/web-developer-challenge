import React from 'react'
import { Container, Props } from '.'

const Card: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>
}

export default Card
