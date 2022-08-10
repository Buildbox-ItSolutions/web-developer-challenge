import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PostList } from ".";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Posts/Feed/FeedList",
  component: PostList,
} as ComponentMeta<typeof PostList>;

export const Feed: ComponentStory<typeof PostList> = (args) => (
  <PostList {...args} />
);

Feed.args = {
  posts: [
    {
      image: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor felis a sem suscipit, vel aliquet metus tempor. Nullam in mi lectus. Nulla hendrerit pretium quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
      name: "José da Silva",
      id: 1,
      createdAt: "2022-08-10T01:41:25.628Z",
      updatedAt: "2022-08-10T01:41:25.628Z",
    },
    {
      image:
        "https://w7.pngwing.com/pngs/238/446/png-transparent-computer-icons-user-profile-avatar-old-man-face-heroes-head.png",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lorem lacus. Ut mattis luctus gravida. Vivamus id risus lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec quis sapien ut ipsum tincidunt eleifend. Ut quis felis odio. Etiam imperdiet porttitor tortor ac volutpat.",
      name: "João Antonio",
      id: 2,
      createdAt: "2022-08-10T01:46:00.439Z",
      updatedAt: "2022-08-10T01:46:00.439Z",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgS9gt7bRQjO4-HPlDtfczUF7pOHNwDfqHnZgrbXm4qgyul1MgHkneswnmeMRUQNolJeM&usqp=CAU",
      message:
        " Vivamus ac placerat odio, in tristique mi. Aliquam dictum volutpat neque. Nullam maximus metus ornare, sollicitudin ligula ac, vehicula sapien. Nullam iaculis magna tempor aliquam auctor. Vestibulum ut ex vestibulum, tristique justo ac, rhoncus libero. Sed eleifend ipsum vel lectus malesuada, interdum placerat justo rhoncus. Sed a dapibus massa, eget pretium.",
      name: "Easter Egg",
      id: 3,
      createdAt: "2022-08-10T01:46:27.790Z",
      updatedAt: "2022-08-10T01:46:27.790Z",
    },
  ],
  onClickDelete: () => {},
};
