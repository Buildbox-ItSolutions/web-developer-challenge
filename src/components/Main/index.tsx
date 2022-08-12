import { PostsContextProvider } from '../../shared/contexts/posts'
import CreatePost from './CreatePost'
import Feed from './Feed'
import { MainContainer } from './style'

export default function Main() {
  return (
    <PostsContextProvider>
      <MainContainer>
        <CreatePost />
        <Feed />
      </MainContainer>
    </PostsContextProvider>
  )
}
