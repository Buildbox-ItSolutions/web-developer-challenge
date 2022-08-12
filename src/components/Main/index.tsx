import CreatePost from '../CreatePost'
import Header from '../Header'
import { MainContainer } from './style'

export default function Main() {
  return (
    <MainContainer>
      <Header />
      <CreatePost />
    </MainContainer>
  )
}
