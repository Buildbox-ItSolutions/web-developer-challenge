import CardPost from '../components/cardpost/CardPost'
import Feed from '../components/feed/Feed'
import Header from '../components/header/Header'
import { Container } from './Styles';

const Home = () => {
  return (
    <Container>
      <Header />
      <CardPost />
      <Feed />
    </Container>
  )
}

export default Home