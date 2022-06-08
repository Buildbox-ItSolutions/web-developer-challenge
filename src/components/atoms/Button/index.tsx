import React from 'react';
import styled from 'styled-components';
import { ThemeColors, ThemeSpacing } from 'styles/theme';

type HTMLButtonType = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface ButtonProps extends HTMLButtonType {
  color?: ThemeColors;
  active?: ThemeColors;
  disabledColor?: ThemeColors;
  fontColor?: ThemeColors;
  textDecorationLine?: HTMLButtonType['style']['textDecorationLine'];
  marginLeft?: ThemeSpacing;
  marginRight?: ThemeSpacing;
  marginTop?: ThemeSpacing;
  marginBottom?: ThemeSpacing;
}

const Button = styled.button<ButtonProps>`
  border: 0px;
  border-radius: 3px;
  cursor: pointer;

  background-color: ${props => props.theme.colors[props.color]};
  color: ${props => props.theme.colors[props.fontColor]};
  font-size: ${props => props.theme.fontSize.md};

  padding-left: ${props => props.theme.spacing[7]};
  padding-right: ${props => props.theme.spacing[7]};
  padding-top: ${props => props.theme.spacing[5]};
  padding-bottom: ${props => props.theme.spacing[5]};
  margin-left: ${props => props.theme.spacing[props.marginLeft]};
  margin-right: ${props => props.theme.spacing[props.marginRight]};
  margin-top: ${props => props.theme.spacing[props.marginTop]};
  margin-bottom: ${props => props.theme.spacing[props.marginBottom]};

  text-decoration: ${props => props.textDecorationLine};

  &:active {
    background-color: ${props => props.theme.colors[props.active]};
  }

  &:disabled {
    background-color: ${props => props.theme.colors[props.disabledColor]};
  }
`;

Button.defaultProps = {
  color: 'primary',
  fontColor: 'white',
  active: 'primary_darker',
  disabledColor: 'gray_scale_8',
  textDecorationLine: 'none',
  marginBottom: '0',
  marginTop: '0',
  marginLeft: '0',
  marginRight: '0'
};

export default Button;
