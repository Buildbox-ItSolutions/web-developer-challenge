import { Feed } from '../Feed'
import { Header } from '../Header'
import { PostForm } from '../PostForm'
import { Wrapper } from './style'

export const Main = () => {
  return (
    <Wrapper>
      <Header />
      <PostForm />
      <Feed />
    </Wrapper>
  )
}
