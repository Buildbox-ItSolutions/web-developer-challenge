import React from 'react'
import Card from '../../components/Card'
import { Container } from '.'
import UploadImage from '../../components/UploadImage'
import Input from '../../components/Input'

const Dashboard = () => {
  return (
    <Container>
      <Card mt="40px">
        <UploadImage />
        <Input placeholder="Digite seu nome" />
      </Card>
      <Card />
    </Container>
  )
}

export default Dashboard
