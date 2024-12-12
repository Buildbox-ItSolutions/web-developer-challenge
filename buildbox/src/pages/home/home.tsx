import { faker } from "@faker-js/faker";
import React from "react";
import { Background } from "../../components/atm-background/background.component";
import { H2 } from "../../components/atm-titles/titles.style";
import { InputPostCard } from "../../components/mol-cards/input-post-card/post-card.component";
import { ReadPostCard } from "../../components/mol-cards/read-post-card/read-post-card.component";
import { AppBar } from "../../components/mol.app-bar/app-bar.component";
import { Separator } from "../../components/utils/separator.component";
import { useUpdateFeed } from "../../hooks/use-update-feed";
import { BodyContainer } from "./home.style";

export const HomeScreen: React.FunctionComponent = () => {
  const { postsList, setFeed, deletePost } = useUpdateFeed();

  return (
    <>
      <Background>
        <AppBar />
        <BodyContainer>
          <Separator size="lg" />
          <InputPostCard onSubmit={(input) => setFeed(input)} />
          <Separator size="lg" />
          <Separator size="sm" />
          <H2>Feed</H2>
          <Separator />
          {postsList?.length ? (
            postsList.map((post) => {
              return (
                <React.Fragment key={post.id}>
                  <ReadPostCard
                    id={post.id}
                    image={post.image || faker.image.imageUrl()}
                    author={post.name}
                    message={post.message}
                    onDelete={(id) => deletePost(id)}
                  />
                  <Separator size="sm" />
                </React.Fragment>
              );
            })
          ) : (
            <></>
          )}
        </BodyContainer>
        <Separator size="lg" />
      </Background>
    </>
  );
};
