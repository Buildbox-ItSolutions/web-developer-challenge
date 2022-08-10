import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CustomGrid } from ".";

export default {
  title: "Core/Grids/Custom",
  component: CustomGrid,
  argTypes: {},
} as ComponentMeta<typeof CustomGrid>;

const Template: ComponentStory<typeof CustomGrid> = (args) => (
  <CustomGrid {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <div>Hello World</div>,
};
