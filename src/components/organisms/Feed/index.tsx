import React from "react";

import * as S from "./styles";
import { FeedCard } from "../../molecules/FeedCard";
import { useFeedContainer } from "./container";

export const Feed = () => {
  const { feeds, animationRef } = useFeedContainer();

  return (
    <S.Container>
      <S.Title>Feed</S.Title>

      <S.CardsArea ref={animationRef}>
        {feeds?.length === 0 ? (
          <S.NullData>Não há feeds no momento.</S.NullData>
        ) : (
          feeds?.map(feed => <FeedCard feed={feed} key={feed.id} />)
        )}
      </S.CardsArea>
    </S.Container>
  );
};
