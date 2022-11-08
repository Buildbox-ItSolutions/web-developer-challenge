import { Feed } from '@components/Feed';
import { Form } from '@components/Form';

import * as S from './styles';

export default function Main() {
  return (
    <S.Container>
      <Form />
      <Feed />
    </S.Container>
  );
}
