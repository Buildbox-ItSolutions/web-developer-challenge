import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DeleteIconButton } from ".";

export default {
  title: "Core/Buttons/Icon/Delete",
  component: DeleteIconButton,
  argTypes: {},
} as ComponentMeta<typeof DeleteIconButton>;

const Template: ComponentStory<typeof DeleteIconButton> = (args) => (
  <DeleteIconButton {...args} />
);

export const Delete = Template.bind({});
