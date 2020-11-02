import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ThemeProvider } from 'styled-components';

import { Button } from 'components/atoms';
import { ButtonProps } from 'models/ButtonProps';

import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    backgrounds: {
      values: [{ name: 'background card', value: '#313131' }],
    },
  },
} as Meta;

const Template: Story<ButtonProps> = args => (
  <ThemeProvider theme={theme}>
    <Button {...args} />
    <GlobalStyle />
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = { typeButton: 'primary', children: 'Primary Button' };

export const Disabled = Template.bind({});
Disabled.args = { children: 'Disabled Button' };

export const Secondary = Template.bind({});
Secondary.args = { typeButton: 'secondary', children: 'Secondary Button' };
