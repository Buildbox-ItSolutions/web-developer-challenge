import React, { useContext } from "react";

import ImageDisplay from "../ImageDisplay";
import {
  AuthorDisplay,
  AuthorFooter,
  Container,
  DeleteIcon,
  MessageBody,
  SentByLabel,
  TextWrapper,
} from "./styles";
import deleteIcon from "../../assets/icons/delete.svg";
import { ContentCardProps } from "../../utils/interfaces";
import { FeedContext } from "../../contexts/FeedContext";
import useWindowDimensions from "../../utils/hooks/useWindowDimensions";

function ContentCard(props: ContentCardProps) {
  const { width } = useWindowDimensions();
  const { feed, setFeed } = useContext(FeedContext)
  const { _id, author, message, image } = props;
  let imageSource;

  try {
    imageSource = require(`../../assets/images/${image}`);
  } catch {
    imageSource = image;
  }

  const deleteContent = (id: string) => {
    const newFeed = feed.filter(content => content._id !== id);

    setFeed(newFeed)
  }

  return (
    <Container width={width}>
      <DeleteIcon src={deleteIcon} onClick={() => deleteContent(_id)} />
      <ImageDisplay src={imageSource} />
      <TextWrapper width={width}>
        <MessageBody width={width}>{ message }</MessageBody>
        <AuthorFooter>
          <SentByLabel>Enviado por</SentByLabel>
          <AuthorDisplay>{ author }</AuthorDisplay>
        </AuthorFooter>
      </TextWrapper>
    </Container>
  );
}

export default ContentCard;
