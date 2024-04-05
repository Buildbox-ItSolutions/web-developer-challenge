import { CardContainer } from '../../CardContainer';
import { CreatePostForm } from '../../forms/CreatePostForm';
import { PostsList } from '../../PostsList';
import { Header } from '../Header';

import * as S from './styles';

export function Home() {
  return (
    <S.HomeContainer>
      <Header />

      <S.HomeContent>
        <CardContainer>
          <CreatePostForm />
        </CardContainer>

        <S.HomePostsListContainer>
          <S.HomePostsListHeading>Feed</S.HomePostsListHeading>

          <PostsList />
        </S.HomePostsListContainer>
      </S.HomeContent>
    </S.HomeContainer>
  );
}
