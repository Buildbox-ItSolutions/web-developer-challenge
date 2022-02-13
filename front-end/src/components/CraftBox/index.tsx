import React from "react";

import { Container } from "./styles";
import ImageWrapper from "../ImageWrapper";
import WritingWrapper from "../WritingWrapper";
import OptionsWrapper from "../OptionsWrapper";
import useWindowDimensions from "../../utils/hooks/useWindowDimensions";

function CraftBox() {
  const { width } = useWindowDimensions();

  return (
    <Container width={width}>
      <ImageWrapper />
      <WritingWrapper />
      <OptionsWrapper />
    </Container>
  );
}

export default CraftBox;
