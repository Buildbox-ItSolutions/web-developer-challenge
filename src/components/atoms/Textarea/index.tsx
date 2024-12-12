import React from 'react';

import { TextareaProps } from 'models/TextareaProps';

import { StyledTextarea } from './styles';

const Textarea: React.FC<TextareaProps> = ({
  getMsgMessageField,
  ...props
}) => {
  return (
    <>
      <StyledTextarea {...props} />
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

export default Textarea;
