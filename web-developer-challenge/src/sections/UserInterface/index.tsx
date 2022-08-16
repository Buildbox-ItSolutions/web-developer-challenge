import { useContext } from 'react';
import { Form, PhotoUpload } from '../../components';
import Context from '../../context/Context';
import * as S from './styles';

export function UserInterface() {
  const { userName, setUserName } = useContext(Context);

  return (
    <S.Container>
      <PhotoUpload />
      <Form />
    </S.Container>
  );
}
