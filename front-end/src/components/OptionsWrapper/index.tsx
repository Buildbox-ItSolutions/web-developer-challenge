import React, { useContext, useEffect, useState } from "react";
import { CraftContext } from "../../contexts/CraftContext";
import { FeedContext } from "../../contexts/FeedContext";
import {
  Container,
  DiscardButton,
  DiscardLabel,
  PublishButton,
  PublishLabel,
} from "./styles";

function OptionsWrapper() {
  const { author, message, image, setAuthor, setMessage, setImage } =
    useContext(CraftContext);
  const { feed, setFeed } = useContext(FeedContext);
  const [enablePublish, setEnablePublish] = useState(false);

  useEffect(() => {
    author && message && image
      ? setEnablePublish(true)
      : setEnablePublish(false);
  }, [author, message, image]);

  const postCreation = () => {
    setFeed([
      {
        author,
        message,
        image,
      },
      ...feed,
    ]);
    setAuthor("")
    setMessage("")
    setImage("")
  };

  return (
    <Container>
      <DiscardButton>
        <DiscardLabel>Descartar</DiscardLabel>
      </DiscardButton>
      <PublishButton
        enabled={enablePublish}
        onClick={enablePublish ? postCreation : null}
      >
        <PublishLabel enabled={enablePublish}>Publicar</PublishLabel>
      </PublishButton>
    </Container>
  );
}

export default OptionsWrapper;
