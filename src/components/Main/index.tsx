import dynamic from 'next/dynamic'

import { PostsContextProvider } from '../../shared/contexts/posts'
import CreatePost from './CreatePost'
import { MainContainer } from './style'

const Feed = dynamic(() => import('./Feed'), {
  ssr: false,
})

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
