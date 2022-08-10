import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FeedPost } from ".";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Posts/Feed/FeedList",
  component: FeedPost,
} as ComponentMeta<typeof FeedPost>;

export const Feed: ComponentStory<typeof FeedPost> = () => <FeedPost />;
