import React from 'react';
import { ImageComponent } from '../image/imageComponent';
import bxLogo from '/bx-logo.png'
import * as S from "./styles";

export const Header: React.FC = () => {
  return (
    <S.Bar>
      <ImageComponent src={bxLogo} alt="Logotipo da empresa e/ou Company logo" />
    </S.Bar>
  );
};

