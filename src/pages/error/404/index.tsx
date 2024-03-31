import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { SForm, STextForm } from '../styled'
import { PageError } from '../types'

const Error404: React.FC<PageError> = ({ title }) => {
  return (
    <Container>
      <Helmet title={title} />

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <SForm>
            <STextForm>Erro 404</STextForm>
            <h5>Esta página não pode ser encontrada.</h5>
          </SForm>
        </Col>
      </Row>
    </Container>
  )
}
export default Error404
