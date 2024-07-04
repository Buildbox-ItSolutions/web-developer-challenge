import React from "react";

import { FiImage, FiXCircle } from "react-icons/fi";
import { IFeedCard } from "../../../core/types";
import { useFeedCardContainer } from "./container";
import * as S from "./styles";

export const FeedCard = ({ feed }: IFeedCard) => {
  const { removeFeed } = useFeedCardContainer();

  return (
    <S.Container>
      <S.Actions>
        <FiXCircle
          size={18}
          role="button"
          onClick={() => removeFeed(feed.id)}
        />
      </S.Actions>

      <S.ContentContainer>
        <S.ImageField>
          {feed?.image ? (
            <img src={feed?.image} alt="author" />
          ) : (
            <FiImage size={23} />
          )}
        </S.ImageField>

        <S.Content>
          <S.Description>{feed.message}</S.Description>
          <div>
            <S.CreditsIntro>Enviado por</S.CreditsIntro>
            <S.CreditsPerson>{feed.name}</S.CreditsPerson>
          </div>
        </S.Content>
      </S.ContentContainer>
    </S.Container>
  );
};
