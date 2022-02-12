import React from "react";
import {
  Container,
  DiscardButton,
  DiscardLabel,
  PublishButton,
  PublishLabel,
} from "./styles";

function OptionsWrapper() {
  return (
    <Container>
      <DiscardButton>
        <DiscardLabel>Descartar</DiscardLabel>
      </DiscardButton>
      <PublishButton>
        <PublishLabel>Publicar</PublishLabel>
      </PublishButton>
    </Container>
  );
}

export default OptionsWrapper;
