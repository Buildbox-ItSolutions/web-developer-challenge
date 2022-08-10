import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FeedAddPost } from ".";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Posts/Feed/FeedAdd",
  component: FeedAddPost,
} as ComponentMeta<typeof FeedAddPost>;

export const Add: ComponentStory<typeof FeedAddPost> = () => <FeedAddPost />;
