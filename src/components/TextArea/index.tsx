

import { TextareaHTMLAttributes } from 'react';

import { StyledTextArea } from './styles';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  getMsgMessageField?: boolean;
}

export function TextArea({ getMsgMessageField, ...props}: TextareaProps) {
  return (
    <>
      <StyledTextArea {...props} />
      {getMsgMessageField && (
        <p
          style={{
            color: '#f00',
            fontSize: '0.8rem',
            width: '100%',
            maxWidth: '468px',
            margin: '0.2rem 0 0 0',
            paddingLeft: '1rem',
          }}
        >
          {' '}
          Este campo é obrigatório
        </p>
      )}
    </>
  );
};
