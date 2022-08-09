import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TrashIconButton } from ".";

export default {
  title: "Core/Buttons/Icon/Trash",
  component: TrashIconButton,
  argTypes: {},
} as ComponentMeta<typeof TrashIconButton>;

const Template: ComponentStory<typeof TrashIconButton> = (args) => (
  <TrashIconButton {...args} />
);

export const Trash = Template.bind({});
