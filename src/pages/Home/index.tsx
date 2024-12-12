import { AddPostForm } from '../../components/AddPostForm'
import { Feed } from '../../components/Feed'
import { Header } from '../../components/Header'
import { MainContainer } from './styles'

export function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <AddPostForm />
        <Feed />
      </MainContainer>
    </>
  )
}
