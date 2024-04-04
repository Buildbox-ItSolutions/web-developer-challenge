import React from 'react';
import * as S from './style'

interface ImageProps {
  src: string | number;
  alt: string;
}

export const ImageComponent: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <S.StyledImage src={String(src)} alt={alt} />
  );
};

export const ImageComponentCard: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <S.StyledImageCard src={String(src)} alt={alt} />
  );
};
