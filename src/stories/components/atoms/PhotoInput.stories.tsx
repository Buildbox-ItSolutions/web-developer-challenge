import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ThemeProvider } from 'styled-components';

import { PhotoInput } from 'components/atoms';

import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

export default {
  title: 'PhotoInput',
  component: PhotoInput,
} as Meta;

const Template: Story = args => (
  <ThemeProvider theme={theme}>
    <PhotoInput {...args} />
    <GlobalStyle />
  </ThemeProvider>
);

export const Default = Template.bind({});
