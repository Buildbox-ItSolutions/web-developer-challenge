import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ThemeProvider } from 'styled-components';

import { Textarea } from 'components/atoms';

import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

export default {
  title: 'Textarea',
  component: Textarea,
} as Meta;

const Template: Story = args => (
  <ThemeProvider theme={theme}>
    <Textarea {...args} />
    <GlobalStyle />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = { placeholder: 'Default Textarea' };
