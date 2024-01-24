import * as React from "react";
import * as Feed from "./feed.styles";
import { IPost } from "../../types/post.types";
import PhotoMockup from "../../assets/photo-base.png";
import Card from "../Card";

const FeedPosts: React.FunctionComponent = () => {
  const PostsMockup: IPost[] = [
    {
      id: "82fe6ea9",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.",
      createdBy: "Manuela Oliveira",
      image: PhotoMockup,
    },
    {
      id: "2efacbf0",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis.",
      createdBy: "Manuela Oliveira",
      image: PhotoMockup,
    },
  ];

  return (
    <>
      <Feed.Container>
        <Feed.Title>Feed</Feed.Title>
        <Feed.CardList>
          {PostsMockup.length ? (
            PostsMockup.map((post) => <Card key={post.id} {...post} />)
          ) : (
            <Feed.EmptyCards>Nenhum item a ser mostrado.</Feed.EmptyCards>
          )}
        </Feed.CardList>
      </Feed.Container>
    </>
  );
};

export default FeedPosts;
