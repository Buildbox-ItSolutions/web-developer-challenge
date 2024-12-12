import { ReactElement } from 'react';

import * as S from './styles';

type BodyProps = {
  children: ReactElement | ReactElement[];
}

export const Body = ({ children }: BodyProps) => {
  return (
    <S.MainContainer>
      {children}
    </S.MainContainer>
  );
};
