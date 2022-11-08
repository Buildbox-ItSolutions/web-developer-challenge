import React from 'react'
import Card from '../../components/Card'
import { Container } from '.'
import UploadImage from '../../components/UploadImage'

const Dashboard = () => {
  return (
    <Container>
      <Card mt="40px">
        <UploadImage />
      </Card>
      <Card />
    </Container>
  )
}

export default Dashboard
