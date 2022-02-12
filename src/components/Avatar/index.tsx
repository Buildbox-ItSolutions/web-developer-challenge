import React, { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

type Props = {
  name?: string;
};

const AvatarStyled = styled.img`
  width: 88px;
  height: 88px;
  object-fit: cover;
  object-position: center;
  border-radius: ${({ theme }) => theme.radius.lg};
`;

const AvatarPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 88px;
  height: 88px;
  color: white;
  font-family: Roboto, sans-serif;
  text-transform: uppercase;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.black[300]};
`;

export default function Avatar({
  src,
  name,
  ...props
}: ImgHTMLAttributes<HTMLImageElement> & Props) {
  if (!src) {
    return <AvatarPlaceholder>{name?.charAt(0)}</AvatarPlaceholder>;
  }

  return <AvatarStyled src={src} {...props} />;
}
