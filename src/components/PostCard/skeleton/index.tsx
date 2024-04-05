import { random } from '../../../utils/random';

import * as S from './styles';

export function PostCardSkeleton() {
  const height = random(3.2, 12.6);

  return (
    <S.SkeletonContainer>
      <S.SkeletonImage as="div" />

      <S.SkeletonContent>
        <S.SkeletonMessage height={height} />

        <S.SkeletonFooter>
          <S.SkeletonSmall />

          <S.SkeletonName />
        </S.SkeletonFooter>
      </S.SkeletonContent>
    </S.SkeletonContainer>
  );
}
