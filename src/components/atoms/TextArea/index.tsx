import React from 'react';
import styled from 'styled-components';
import { ThemeSpacing } from 'styles/theme';

type HTMLTextAreaType = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export interface TextAreaProps extends HTMLTextAreaType {
  width?: string | number;
  marginLeft?: ThemeSpacing;
  marginRight?: ThemeSpacing;
  marginTop?: ThemeSpacing;
  marginBottom?: ThemeSpacing;
}

const TextArea = styled.textarea<TextAreaProps>`
  width: ${props => props.width};
  border: 0px;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.gray_scale_5};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSize.md};

  padding: ${props => props.theme.spacing[5]} ${props => props.theme.spacing[6]};

  margin-left: ${props => props.theme.spacing[props.marginLeft]};
  margin-right: ${props => props.theme.spacing[props.marginRight]};
  margin-top: ${props => props.theme.spacing[props.marginTop]};
  margin-bottom: ${props => props.theme.spacing[props.marginBottom]};

  resize: vertical;

  &:focus {
    outline: none !important;
    border: 1px solid ${props => props.theme.colors.primary};
    box-shadow: 0 0 5px ${props => props.theme.colors.primary};
  }

  &:disabled {
    background-color: ${props => props.theme.colors.gray_scale_8};
  }
`;

TextArea.defaultProps = {
  width: '100%',
  marginBottom: '0',
  marginTop: '0',
  marginLeft: '0',
  marginRight: '0'
};

export default TextArea;
