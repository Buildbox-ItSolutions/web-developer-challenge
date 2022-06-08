import styled from 'styled-components';
import {
  ThemeColors,
  ThemeFontSize,
  ThemeFontWeight,
  ThemeSpacing
} from 'styles/theme';

export interface TypographyProps {
  fontColor?: ThemeColors;
  fontWeight?: ThemeFontWeight;
  fontSize?: ThemeFontSize;
  marginLeft?: ThemeSpacing;
  marginRight?: ThemeSpacing;
  marginTop?: ThemeSpacing;
  marginBottom?: ThemeSpacing;
}

const Typography = styled.p<TypographyProps>`
  color: ${props => props.theme.colors[props.fontColor]};
  font-size: ${props => props.theme.fontSize[props.fontSize]};
  font-weight: ${props => props.theme.fontWeight[props.fontWeight]};

  margin-left: ${props => props.theme.spacing[props.marginLeft]};
  margin-right: ${props => props.theme.spacing[props.marginRight]};
  margin-top: ${props => props.theme.spacing[props.marginTop]};
  margin-bottom: ${props => props.theme.spacing[props.marginBottom]};
`;

Typography.defaultProps = {
  fontColor: 'white',
  fontSize: 'sm',
  fontWeight: 'regular',
  marginBottom: '0',
  marginTop: '0',
  marginLeft: '0',
  marginRight: '0'
};

export default Typography;
