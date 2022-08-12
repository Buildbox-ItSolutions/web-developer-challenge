import CreatePost from '../CreatePost'
import Feed from '../Feed'
import Header from '../Header'
import { MainContainer } from './style'

export default function Main() {
  return (
    <MainContainer>
      <Header />
      <CreatePost />
      <Feed />
    </MainContainer>
  )
}
