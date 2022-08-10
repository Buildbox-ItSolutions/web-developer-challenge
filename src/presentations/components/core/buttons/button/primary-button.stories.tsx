import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PrimaryButton } from ".";

export default {
  title: "Core/Buttons/Button/Primary",
  component: PrimaryButton,
  argTypes: {},
} as ComponentMeta<typeof PrimaryButton>;

const Template: ComponentStory<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
}