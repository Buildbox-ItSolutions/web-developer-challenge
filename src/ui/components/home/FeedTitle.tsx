import { Container } from "../../partials/generic/container";
import { FeedTitleText } from "../../partials/home/HomeLayout";

export const FeedTitle= ()=>{
    return(
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
}