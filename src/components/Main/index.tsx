import CreatePost from './CreatePost'
import Feed from './Feed'
import { MainContainer } from './style'

export default function Main() {
  return (
    <MainContainer>
      <CreatePost />
      <Feed />
    </MainContainer>
  )
}
