import { TextareaHTMLAttributes } from 'react';

import { StyledTextArea } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function TextArea({...props}: TextareaProps) {
  return (
    <StyledTextArea {...props} />
  );
};
