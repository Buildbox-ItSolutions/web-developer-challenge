import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ThemeProvider } from 'styled-components';

import { Header } from 'components/atoms';

import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

export default {
  title: 'Header',
  component: Header,
} as Meta;

const Template: Story = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
  </ThemeProvider>
);

export const Default = Template.bind({});
