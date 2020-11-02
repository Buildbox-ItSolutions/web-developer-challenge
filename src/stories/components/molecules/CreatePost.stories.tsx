import React from 'react';
import { Provider } from 'react-redux';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ThemeProvider } from 'styled-components';

import store from 'store';

import { CreatePost } from 'components/molecules';

import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

export default {
  title: 'CreatePost',
  component: CreatePost,
} as Meta;

const Template: Story = args => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CreatePost {...args} />
      <GlobalStyle />
    </ThemeProvider>
  </Provider>
);

export const Default = Template.bind({});
Default.args = { placeholder: 'Default Input' };
