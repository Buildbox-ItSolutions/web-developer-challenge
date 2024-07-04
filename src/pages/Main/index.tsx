import React from "react";

import { CreateFeed } from "../../components/molecules/CreateFeed";
import { Header } from "../../components/organisms/Header";
import { Feed } from "../../components/organisms/Feed";
import * as S from "./styles";

export function Main() {
  return (
    <>
      <Header />

      <S.Container>
        <CreateFeed />
        <Feed />
      </S.Container>
    </>
  );
}
