import InsertPost from 'components/InsertPost'
import ShowPosts from 'components/ShowPosts'
import { useState } from 'react'
import * as S from './styles'

export interface IntProst {
  id: number
  name: string
  mensagem: string
}

export type PostProps = Array<IntProst>

const Main = () => {
  const [postList, setPostList] = useState<PostProps>([])
  const addPostlist = (postitem: PostProps) =>
    setPostList([...postList, postitem])
  const deletPostList = (deletitem: IntProst) =>
    setPostList(postList.filter((e) => e.id !== deletitem.id))
  return (
    <S.Wrapper>
      <InsertPost addPostlistProp={addPostlist} />
      <S.Post>
        {postList.map((e) => (
          <ShowPosts key={e.id} item={e} deletPostItemProps={deletPostList} />
        ))}
      </S.Post>
    </S.Wrapper>
  )
}

export default Main
