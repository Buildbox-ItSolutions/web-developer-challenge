import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IconButton } from ".";

export default {
  title: "Core/Buttons/Icon",
  component: IconButton,
  argTypes: {},
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Default = Template.bind({});
