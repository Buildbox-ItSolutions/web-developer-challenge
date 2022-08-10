import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PostListItem } from ".";
import { Container } from "../post-list/styles";

const Content = (props: any) => {
  return (
    <Container style={{ position: "relative" }}>
      <PostListItem {...props} />
    </Container>
  );
};

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Posts/Feed/FeedItem",
  component: Content,
} as ComponentMeta<typeof Content>;

export const Feed: ComponentStory<typeof Content> = (args) => (
  <Content {...args} />
);

Feed.args = {
  item: {
    id: 1,
    image: "",
    message: "",
    name: "",
  },
  onClickDelete: (id: number) => {},
};
