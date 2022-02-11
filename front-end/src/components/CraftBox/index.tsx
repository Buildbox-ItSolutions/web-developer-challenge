import React from "react";

import { Container } from "./styles";
import ImageWrapper from "../ImageWrapper";
import WritingWrapper from "../WritingWrapper";
import OptionsWrapper from "../OptionsWrapper";

function CraftBox() {
  return (
    <Container>
      <ImageWrapper />
      <WritingWrapper />
      <OptionsWrapper />
    </Container>
  );
}

export default CraftBox;
