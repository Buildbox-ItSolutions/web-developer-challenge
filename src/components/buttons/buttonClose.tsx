import React, { ReactNode, MouseEvent } from 'react';
import * as S from './styles';

interface ButtonClick {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

export const ButtonClosed: React.FC<ButtonClick> = ({ onClick, children }) => {
  return (
    <S.ButtonWrapper onClick={onClick}>
      {children}
    </S.ButtonWrapper>
  );
};


