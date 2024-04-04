import React from 'react';
import * as S from './styles';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const ButtonDiscard: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <S.ButtonDiscardStyle onClick={onClick}>
      {children}
    </S.ButtonDiscardStyle>
  );
};