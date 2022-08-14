import { InputPost, Post } from 'components/organisms'
import { Header } from 'components/molecules'

import * as S from './styles'
import { usePost } from 'hooks'

export const Home = () => {
  const { posts } = usePost()
  return (
    <>
      <Header />
      <S.Content>
        <InputPost />

        {!!posts.length && <S.Title>Feed</S.Title>}
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            author={post.name}
            content={post.content}
            pic={post.picture}
          />
        ))}
      </S.Content>
    </>
  )
}
