import { ReactElement } from 'react';

import * as S from '../styles';

type ButtonsContainerProps = {
  children: ReactElement | ReactElement[];
};

export const ButtonsContainer = ({ children }: ButtonsContainerProps) => {
  return (
    <S.ButtonsContainer>
      {children}
    </S.ButtonsContainer>
  )
};
