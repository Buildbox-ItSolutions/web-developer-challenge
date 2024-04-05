import styled, { css, keyframes } from 'styled-components';

import * as PostCardStyles from '../styles';

const pulseAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const pulse = css`
  background-color: ${({ theme }) => theme.colors.card.skeletonBackground};
  animation: ${pulseAnimation} 1.5s ease-in-out infinite;
`;

export const SkeletonContainer = styled(PostCardStyles.PostCardContainer)`
  width: 100%;
`;

export const SkeletonImage = styled(PostCardStyles.ImgStyled)`
  ${pulse}
`;

export const SkeletonContent = styled(PostCardStyles.Content)`
  width: 100%;
`;

export const SkeletonMessage = styled(PostCardStyles.Message)<{
  height?: number;
}>`
  ${pulse}

  height: ${({ height }) => height}rem;
`;

export const SkeletonFooter = styled(PostCardStyles.Footer)`
  width: 100%;
`;

export const SkeletonSmall = styled.small`
  ${pulse}

  display: inline-block;

  height: 1.8rem;
  width: 7.2rem;
`;

export const SkeletonName = styled(PostCardStyles.Name)`
  ${pulse}

  display: inline-block;

  height: 2.2rem;
  width: 24rem;
`;
