import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AddPost from "./add-post";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "AddPost",
  component: AddPost,
} as ComponentMeta<typeof AddPost>;

// export const Primary: ComponentStory<typeof AddPost> = () => <AddPost />;
