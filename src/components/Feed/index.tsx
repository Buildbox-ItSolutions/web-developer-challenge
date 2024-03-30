import { PostList } from '../PostList'
import * as S from './style'
export const Feed: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Title>Feed</S.Title>
      <PostList />
    </S.Wrapper>
  )
}
