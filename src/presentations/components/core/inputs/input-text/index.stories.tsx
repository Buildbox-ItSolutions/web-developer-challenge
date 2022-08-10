import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InputText } from ".";

export default {
  title: "Core/Inputs/InputText",
  component: InputText,
  argTypes: {},
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => (
  <InputText {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "default",
};
