import styled from 'styled-components';
import { ThemeSpacing } from 'styles/theme';

type HTMLDivType = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface CardProps extends HTMLDivType {
  paddingLeft?: ThemeSpacing;
  paddingRight?: ThemeSpacing;
  paddingTop?: ThemeSpacing;
  paddingBottom?: ThemeSpacing;
  minHeight?: HTMLDivType['style']['minHeight'];
}

const Card = styled.div<CardProps>`
  flex: 1;
  border-radius: 3;
  padding-left: ${props => props.theme.spacing[props.paddingLeft]};
  padding-right: ${props => props.theme.spacing[props.paddingRight]};
  padding-top: ${props => props.theme.spacing[props.paddingTop]};
  padding-bottom: ${props => props.theme.spacing[props.paddingBottom]};
  border: solid 1px ${props => props.theme.colors.gray_scale_4};
  background-color: ${props => props.theme.colors.gray_scale_2};
  min-height: ${props => props.minHeight};
`;

Card.defaultProps = {
  paddingBottom: '7',
  paddingTop: '7',
  paddingLeft: '7',
  paddingRight: '7'
};

export default Card;
