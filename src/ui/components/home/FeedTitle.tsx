import { Container } from "../generic/container";
import { FeedTitleText } from "./partials/HomePartials";

//Título de Feed. Usado para o positionamento do título.
//Feed Title. Used for title positioning.

export const FeedTitle = () => {
  return (
    <Container
      id="containerFeed"
      width="30px"
      height="100%"
      vAlign="flex-end"
      padding="0 0 8px 0"
      hAlign="center"
    >
      <FeedTitleText>Feed</FeedTitleText>
    </Container>
  );
};
