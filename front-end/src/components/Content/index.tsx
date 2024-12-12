import React from "react";

import { CraftContextProvider } from "../../contexts/CraftContext";
import { FeedContextProvider } from "../../contexts/FeedContext";
import CraftBox from "../CraftBox";
import Feed from "../Feed";
import { Container } from "./styles";

function Content() {
  return (
    <Container>
      <FeedContextProvider>
        <CraftContextProvider>
          <CraftBox />
        </CraftContextProvider>
        <Feed />
      </FeedContextProvider>
    </Container>
  );
}

export default Content;
