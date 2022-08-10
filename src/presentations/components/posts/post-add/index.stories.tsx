import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PostAdd } from ".";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Posts/Feed/FeedAdd",
  component: PostAdd,
} as ComponentMeta<typeof PostAdd>;

export const Add: ComponentStory<typeof PostAdd> = (args) => (
  <PostAdd {...args} />
);

Add.args = {
  post: {
    image: "",
    message: "",
    name: "",
  },
};
