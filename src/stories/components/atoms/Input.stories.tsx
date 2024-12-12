import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ThemeProvider } from 'styled-components';

import { Input } from 'components/atoms';

import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

export default {
  title: 'Input',
  component: Input,
} as Meta;

const Template: Story = args => (
  <ThemeProvider theme={theme}>
    <Input {...args} />
    <GlobalStyle />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = { placeholder: 'Default Input' };
