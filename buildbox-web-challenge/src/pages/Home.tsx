import CardPost from '../components/cardpost/CardPost'
import Feed from '../components/feed/Feed'
import Header from '../components/header/Header'
import { Container } from './Styles'
import dbData from '../../db.json';

const Home = () => {
  return (
    <Container>
      <Header />
      <CardPost />
      <Feed data={dbData}/>
    </Container>
  )
}

export default Home