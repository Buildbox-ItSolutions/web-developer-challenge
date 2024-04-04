import React from 'react';
import * as S from './styles';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const ButtonPublish: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
      <S.ButtonPublishStyle onClick={onClick}>
        {children}
      </S.ButtonPublishStyle>
    );
  };

