import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DisabledButton } from ".";

export default {
  title: "Core/Buttons/Button/Disabled",
  component: DisabledButton,
  argTypes: {},
} as ComponentMeta<typeof DisabledButton>;

const Template: ComponentStory<typeof DisabledButton> = (args) => (
  <DisabledButton {...args} />
);

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Button",
};
