import type { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

type Props = {
  name?: string;
};

type AvatarImgProps = {
  includeMediaQuery?: boolean;
};

const AvatarStyled = styled.img<AvatarImgProps>`
  width: 88px;
  height: 88px;
  object-fit: cover;
  object-position: center;
  border-radius: ${({ theme }) => theme.radius.lg};

  ${({ theme, includeMediaQuery }) =>
    includeMediaQuery &&
    `@media screen and (max-width: ${theme.breakpoints.sm}) {
  width: 44px;
  height: 44px;
}`};
`;

export const AvatarPlaceholder = styled(AvatarStyled)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: Roboto, sans-serif;
  text-transform: uppercase;
  border: 1px solid ${({ theme }) => theme.black[300]};
`;

export default function Avatar({ src, name, ...props }: ImgHTMLAttributes<HTMLImageElement> & Props & AvatarImgProps) {
  if (!src) {
    return (
      <AvatarPlaceholder as="div" aria-label={name} includeMediaQuery={props.includeMediaQuery}>
        {name?.charAt(0)}
      </AvatarPlaceholder>
    );
  }

  return <AvatarStyled src={src} alt={name} {...props} />;
}
