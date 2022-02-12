import React from "react";

import CraftBox from "../CraftBox";
import Feed from "../Feed";
import { Container } from "./styles";

function Content() {
  return (
    <Container>
      <CraftBox />
      <Feed />
    </Container>
  );
}

export default Content;
