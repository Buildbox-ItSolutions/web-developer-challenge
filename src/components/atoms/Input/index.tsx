import React from 'react';

import { InputProps } from 'models/InputProps';

import { StyledInput } from './styles';

const Input: React.FC<InputProps> = ({ getMsgNameField, ...props }) => {
  return (
    <>
      <StyledInput {...props} />
      {getMsgNameField && (
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
          Este campo é obrigatório
        </p>
      )}
    </>
  );
};

export default Input;
