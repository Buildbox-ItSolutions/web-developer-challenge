import styled from 'styled-components';
import { ThemeColors } from 'styles/theme';

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
}

const Button = styled.button<ButtonProps>`
  border: 0px;
  border-radius: 3px;
  background-color: ${props => props.theme.colors[props.color]};
  color: ${props => props.theme.colors[props.fontColor]};
  font-size: ${props => props.theme.fontSize.md};
  padding-left: ${props => props.theme.spacing[7]};
  padding-right: ${props => props.theme.spacing[7]};
  padding-top: ${props => props.theme.spacing[5]};
  padding-bottom: ${props => props.theme.spacing[5]};
  text-decoration: ${props => props.textDecorationLine};

  &:hover {
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
  textDecorationLine: 'none'
};

export default Button;
