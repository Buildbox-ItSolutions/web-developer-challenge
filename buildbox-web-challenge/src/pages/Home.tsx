import CardPost from '../components/cardpost/CardPost'
import Header from '../components/header/Header'
import { Container } from './Styles'

const Home = () => {
  return (
    <Container>
      <Header />
      <CardPost />
    </Container>
  )
}

export default Home