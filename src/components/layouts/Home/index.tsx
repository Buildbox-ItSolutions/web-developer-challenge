import { CardContainer } from '../../CardContainer';
import { CreatePostForm } from '../../forms/CreatePostForm';
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
      </S.HomeContent>
    </S.HomeContainer>
  );
}
