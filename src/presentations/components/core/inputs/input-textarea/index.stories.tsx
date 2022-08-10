import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InputTextArea } from ".";

export default {
  title: "Core/Inputs/InputTextArea",
  component: InputTextArea,
  argTypes: {},
} as ComponentMeta<typeof InputTextArea>;

const Template: ComponentStory<typeof InputTextArea> = (args) => (
  <InputTextArea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "InputTextArea",
};
