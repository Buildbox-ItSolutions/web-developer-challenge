import React from 'react';
import * as S from "./styles";

interface Paragraph {
  children: string;
}

export const MesageParagraph: React.FC<Paragraph> = ({ children }) => {
  return (
    <S.MessageParagraph>
        {children}
    </S.MessageParagraph>
  );
};

export const WhoParagraph: React.FC<Paragraph> = ({ children }) => {
    return (
      <S.WhoParagraph>
          {children}
      </S.WhoParagraph>
    );
};

  
export const NameParagraph: React.FC<Paragraph> = ({ children }) => {
    return (
      <S.NameParagraph>
          {children}
      </S.NameParagraph>
    );
};
  