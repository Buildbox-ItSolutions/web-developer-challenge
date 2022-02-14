import axios from "axios";
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

interface OptionsWrapperProps {
  imageData: File;
  handleClearImageData: () => void;
}

function OptionsWrapper(props: OptionsWrapperProps) {
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
    const bodyFormData = new FormData();

    setFeed([
      {
        _id: (feed[feed.length - 1]._id + 1).toString(),
        image,
        author,
        message,
      },
      ...feed,
    ]);

    bodyFormData.append("image", props.imageData);
    bodyFormData.append("author", author);
    bodyFormData.append("message", message);

    axios({
      method: "post",
      url: "http://localhost:4000/create/content",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });

    clearCreation();
  };

  const clearCreation = () => {
    setAuthor("");
    setMessage("");
    setImage("");
    props.handleClearImageData();
  };

  return (
    <Container>
      <DiscardButton onClick={clearCreation}>
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
