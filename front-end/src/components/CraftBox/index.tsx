import React, { useState } from "react";

import { Container } from "./styles";
import ImageWrapper from "../ImageWrapper";
import WritingWrapper from "../WritingWrapper";
import OptionsWrapper from "../OptionsWrapper";
import useWindowDimensions from "../../utils/hooks/useWindowDimensions";

function CraftBox() {
  const empty = new File([], "");
  const { width } = useWindowDimensions();
  const [imageData, setImageData] = useState(empty);

  const handleImageData = (data: File) => {
    setImageData(data);
  };

  const handleClearImageData = () => {
    setImageData(empty);
  };

  return (
    <Container width={width}>
      <ImageWrapper onSelectImage={handleImageData} />
      <WritingWrapper />
      <OptionsWrapper
        imageData={imageData}
        handleClearImageData={handleClearImageData}
      />
    </Container>
  );
}

export default CraftBox;
